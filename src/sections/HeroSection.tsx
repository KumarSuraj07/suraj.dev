import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../components/FadeIn";
import GLBModel from "../components/GLBModel";
import modelSrc from "../assets/listening_to_the_wind.glb";
import resumePdf from "../../Resume.pdf";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// 3-level metallic silver stage platform
function Stage({ scale = 1 }: { scale?: number }) {
  const levels = [
    { w: "100%", topH: 7, sideH: 9, topGrad: "linear-gradient(180deg, rgba(200,200,200,0.25) 0%, rgba(160,160,160,0.2) 40%, rgba(130,130,130,0.15) 100%)", sideGrad: "linear-gradient(180deg, rgba(140,140,140,0.2) 0%, rgba(70,70,70,0.15) 60%, rgba(40,40,40,0.1) 100%)" },
    { w: "74%",  topH: 7, sideH: 9, topGrad: "linear-gradient(180deg, rgba(210,210,210,0.25) 0%, rgba(170,170,170,0.2) 40%, rgba(145,145,145,0.15) 100%)", sideGrad: "linear-gradient(180deg, rgba(150,150,150,0.2) 0%, rgba(80,80,80,0.15) 60%, rgba(45,45,45,0.1) 100%)" },
    { w: "48%",  topH: 7, sideH: 9, topGrad: "linear-gradient(180deg, rgba(220,220,220,0.25) 0%, rgba(180,180,180,0.2) 40%, rgba(155,155,155,0.15) 100%)", sideGrad: "linear-gradient(180deg, rgba(160,160,160,0.2) 0%, rgba(90,90,90,0.15) 60%, rgba(50,50,50,0.1) 100%)" },
  ];
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 flex flex-col-reverse items-center"
      style={{ width: `${42 * scale}%`, zIndex: -1, bottom: "-24px" }}
    >
      {levels.map((l, i) => (
        <div key={i} className="flex flex-col items-center w-full" style={{ width: l.w }}>
          <div style={{
            width: "100%",
            height: `${l.sideH}px`,
            background: l.sideGrad,
            borderRadius: "0 0 50% 50% / 0 0 8px 8px",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(0,0,0,0.15)",
          }} />
          <div style={{
            width: "100%",
            height: `${l.topH}px`,
            borderRadius: "50%",
            background: l.topGrad,
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.15)",
            marginBottom: "-1px",
            order: -1,
          }} />
        </div>
      ))}
      <div style={{
        position: "absolute",
        bottom: "-6px",
        left: "5%",
        right: "5%",
        height: "10px",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,0,0,0.2) 0%, transparent 70%)",
        filter: "blur(4px)",
      }} />
    </div>
  );
}

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: "clip" }}>

      {/* NAV */}
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-10 pt-5 md:pt-8 relative z-30">
        <span className="text-[#D7E2EA] font-black uppercase tracking-widest text-sm">Suraj.dev</span>
        <button
          type="button"
          className="flex flex-col gap-[5px] p-2 z-40"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-6 h-[2px] bg-[#D7E2EA] rounded-full origin-center"
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-[#D7E2EA] rounded-full"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-[#D7E2EA] rounded-full origin-center"
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="absolute top-16 left-0 right-0 z-20 flex flex-col items-center gap-6 py-8"
            style={{ background: "rgba(12,12,12,0.97)", backdropFilter: "blur(12px)" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-[#D7E2EA] font-medium uppercase tracking-widest text-lg hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO CONTENT */}
      <div className="flex-1 flex flex-col relative">

        {/* Mobile layout: model in-flow, heading below */}
        <div className="flex sm:hidden flex-col items-center justify-center flex-1 gap-0">
          <div className="relative w-[48vw] max-w-[210px] mt-8">
            <FadeIn delay={0.6} y={20} className="aspect-square">
              <GLBModel src={modelSrc} className="w-full h-full" />
            </FadeIn>
            <Stage scale={0.9} />
          </div>
          <FadeIn delay={0.15} y={30}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center text-[13vw]">
              Hi, i&apos;m suraj
            </h1>
          </FadeIn>
        </div>

        {/* Desktop layout: heading + absolute model */}
        <div className="hidden sm:flex flex-col justify-center flex-1">
          <div className="overflow-hidden">
            <FadeIn delay={0.15} y={40}>
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center w-full md:-mt-5 sm:text-[11vw] md:text-[12vw] lg:text-[13vw]">
                Hi, i&apos;m suraj
              </h1>
            </FadeIn>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 z-10 sm:w-[260px] md:w-[340px] lg:w-[400px] aspect-square" style={{ bottom: "-40px" }}>
            <FadeIn delay={0.6} y={30}>
              <GLBModel src={modelSrc} className="w-full h-full" />
            </FadeIn>
            <Stage />
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="flex justify-between items-end pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[140px] sm:max-w-[200px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.65rem, 1.4vw, 1.5rem)" }}
          >
            a full stack developer driven by turning clean designs into fast, functional web experiences
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <a
            href={resumePdf}
            download="Suraj_Kumar_Resume.pdf"
            className="rounded-full px-6 py-2.5 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest whitespace-nowrap flex items-center gap-2"
            style={{
              background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
              boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
              outline: "2px solid white",
              outlineOffset: "-3px",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M12 3v13M7 11l5 5 5-5M5 21h14" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Resume
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
