import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface GLBModelProps {
  src: string;
  className?: string;
}

export default function GLBModel({ src, className = "" }: GLBModelProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth || 520;
    const h = mount.clientHeight || 520;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0, 3);

    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 2);
    dir.position.set(5, 5, 5);
    scene.add(dir);
    const dir2 = new THREE.DirectionalLight(0xbbccd7, 1);
    dir2.position.set(-5, -3, -5);
    scene.add(dir2);

    let mixer: THREE.AnimationMixer | null = null;
    let model: THREE.Object3D | null = null;
    const clock = new THREE.Clock();

    const loader = new GLTFLoader();
    loader.load(src, (gltf) => {
      model = gltf.scene;
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      model.position.sub(center);
      model.scale.setScalar(2 / maxDim);

      scene.add(model);

      if (gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => mixer!.clipAction(clip).play());
      }
    });

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      mixer?.update(delta);
      if (model) model.rotation.y += 0.004;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [src]);

  return <div ref={mountRef} className={className} style={{ width: "100%", height: "100%" }} />;
}
