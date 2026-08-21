import { useEffect, useRef } from "react";
import * as THREE from "three";

const EARTH_MAP  = "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg";
const EARTH_SPEC = "https://unpkg.com/three-globe/example/img/earth-water.png";

// Ranchi, Jharkhand — 85.33°E, 23.35°N
const PIN_LAT = 23.35;
const PIN_LON = 85.33;

function latLonToVec3(lat: number, lon: number, r: number) {
  const phi   = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta)
  );
}

export default function EarthGlobe({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth  || 400;
    const h = mount.clientHeight || 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    mount.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0, 2.8);

    const loader = new THREE.TextureLoader();

    // Single globe mesh — no second overlapping mesh (that caused the lines)
    const geo = new THREE.SphereGeometry(1, 64, 64);
    const mat = new THREE.MeshPhongMaterial({ shininess: 20 });
    loader.load(EARTH_MAP,  (t) => { mat.map         = t; mat.needsUpdate = true; });
    loader.load(EARTH_SPEC, (t) => { mat.specularMap = t; mat.specular = new THREE.Color(0x223344); mat.needsUpdate = true; });

    const globe = new THREE.Mesh(geo, mat);
    // Start with India roughly facing front (lon ~80°E)
    globe.rotation.y = -(80 * Math.PI) / 180;
    scene.add(globe);

    // Atmosphere — slightly larger sphere, additive, NO shared geo
    const atmMat = new THREE.MeshPhongMaterial({
      color: new THREE.Color(0x2277ff),
      transparent: true,
      opacity: 0.08,
      side: THREE.FrontSide,
      depthWrite: false,
    });
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.03, 64, 64), atmMat));

    // Outer halo (back-side)
    const haloMat = new THREE.MeshPhongMaterial({
      color: new THREE.Color(0x1144aa),
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
      depthWrite: false,
    });
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.1, 64, 64), haloMat));

    // Pin on Ranchi
    const pinPos = latLonToVec3(PIN_LAT, PIN_LON, 1.02);
    const pin    = new THREE.Mesh(
      new THREE.SphereGeometry(0.028, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xb600a8 })
    );
    pin.position.copy(pinPos);
    globe.add(pin);

    // Pulse ring
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xb600a8,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.038, 0.055, 32), ringMat);
    ring.position.copy(pinPos);
    ring.lookAt(pinPos.clone().multiplyScalar(2));
    globe.add(ring);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const sun = new THREE.DirectionalLight(0xffffff, 1.5);
    sun.position.set(5, 3, 5);
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0x3355aa, 0.35);
    fill.position.set(-4, -2, -4);
    scene.add(fill);

    // Animate
    let animId: number;
    let ringScale = 1;
    let ringDir   = 1;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      globe.rotation.y += 0.0025;

      ringScale += 0.012 * ringDir;
      if (ringScale > 1.8) ringDir = -1;
      if (ringScale < 1.0) ringDir =  1;
      ring.scale.setScalar(ringScale);
      ringMat.opacity = 0.8 * (1 - (ringScale - 1) / 0.8);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={className} style={{ width: "100%", height: "100%" }} />;
}
