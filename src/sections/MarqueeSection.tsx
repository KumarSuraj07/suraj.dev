import { useEffect, useRef, useState } from "react";

import photo1 from "../assets/photos/Screenshot 2026-08-21 125021.png";
import photo2 from "../assets/photos/Screenshot 2026-08-21 125131.png";
import photo3 from "../assets/photos/Screenshot 2026-08-21 125308.png";
import photo4 from "../assets/photos/Screenshot 2026-08-21 125414.png";
import photo5 from "../assets/photos/Screenshot 2026-08-21 125523.png";
import photo6 from "../assets/photos/Screenshot 2026-08-21 125632.png";

const ROW_1 = [photo1, photo2, photo3];
const ROW_2 = [photo4, photo5, photo6];

function tripled(arr: string[]) {
  return [...arr, ...arr, ...arr];
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="pt-24 sm:pt-32 md:pt-40 pb-10" style={{ background: "#0C0C0C" }}>
      <div className="flex flex-col gap-3 overflow-hidden">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}
        >
          {tripled(ROW_1).map((src, i) => (
            <div
              key={`r1-${i}`}
              className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden"
            >
              <img src={src} alt="" className="w-full h-full object-cover" draggable={false} />
            </div>
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: "transform" }}
        >
          {tripled(ROW_2).map((src, i) => (
            <div
              key={`r2-${i}`}
              className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden"
            >
              <img src={src} alt="" className="w-full h-full object-cover" draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
