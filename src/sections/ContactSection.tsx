import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import EarthGlobe from "../components/EarthGlobe";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "ksurajk2001@gmail.com",
    href: "mailto:ksurajk2001@gmail.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: "#B600A8",
  },
  {
    label: "Phone",
    value: "+91 8084577228",
    href: "tel:+918084577228",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.2c1.2.5 2.5.8 3.9.8a1 1 0 011 1V21a1 1 0 01-1 1C10.6 22 2 13.4 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.4.3 2.7.8 3.9a1 1 0 01-.2 1.1L6.6 10.8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#7621B0",
  },
  {
    label: "GitHub",
    value: "KumarSuraj07",
    href: "https://github.com/KumarSuraj07",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
    color: "#BE4C00",
  },
  {
    label: "LinkedIn",
    value: "suraj07kumar",
    href: "https://www.linkedin.com/in/suraj07kumar/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 10v7M7 7v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M11 17v-4c0-1.105.895-2 2-2s2 .895 2 2v4M11 10v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#0077B5",
  },
];

function ContactCard({ item, index }: { item: typeof CONTACT_LINKS[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.a
      ref={ref}
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.02, x: 6 }}
      className="flex items-center gap-4 rounded-2xl p-5 sm:p-6 group relative overflow-hidden cursor-pointer"
      style={{ border: `1px solid ${item.color}30`, background: `${item.color}08` }}
    >
      {/* hover glow sweep */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `linear-gradient(120deg, transparent 30%, ${item.color}18 60%, transparent 90%)` }}
      />

      {/* icon */}
      <div
        className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center relative z-10"
        style={{ background: `${item.color}15`, border: `1px solid ${item.color}40`, color: item.color }}
      >
        {item.icon}
      </div>

      {/* text */}
      <div className="flex flex-col min-w-0 relative z-10">
        <span className="text-[#D7E2EA] opacity-40 uppercase tracking-widest text-[10px] font-medium">{item.label}</span>
        <span className="text-[#D7E2EA] font-semibold text-sm sm:text-base truncate mt-0.5">{item.value}</span>
      </div>

      {/* animated arrow */}
      <motion.div
        className="ml-auto shrink-0 relative z-10"
        initial={{ x: 0, opacity: 0.3 }}
        whileHover={{ x: 4, opacity: 1 }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H7M17 7v10" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </motion.a>
  );
}

export default function ContactSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true });

  return (
    <section id="contact" className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden">

      {/* Background orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(118,33,176,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(182,0,168,0.1) 0%, transparent 70%)", filter: "blur(40px)" }} />

      {/* Heading */}
      <div ref={headingRef} className="text-center mb-16 sm:mb-20 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#D7E2EA] opacity-40 uppercase tracking-[0.3em] text-xs sm:text-sm mb-4"
        >
          Let&apos;s work together
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 10vw, 130px)" }}
        >
          Contact
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-4 h-px w-32 origin-left"
          style={{ background: "linear-gradient(90deg, #7621B0, #B600A8, #BE4C00)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10">

        {/* Left — globe + location */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full lg:w-[45%] flex flex-col items-center gap-5"
        >
          {/* Globe with glow ring */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(182,0,168,0.2) 0%, transparent 70%)", filter: "blur(20px)", transform: "scale(1.2)" }} />
            <div className="w-full aspect-square max-w-[220px] sm:max-w-[380px] relative">
              <EarthGlobe className="w-full h-full" />
            </div>
          </div>

          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 rounded-full px-5 py-3"
            style={{ border: "1px solid rgba(182,0,168,0.35)", background: "rgba(182,0,168,0.08)" }}
          >
            {/* pulsing dot */}
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#B600A8" }} />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "#B600A8" }} />
            </span>
            <div>
              <p className="text-[#D7E2EA] font-semibold text-sm">Ranchi, Jharkhand, India</p>
              <p className="text-[#D7E2EA] opacity-45 text-xs">Open to remote &amp; relocation</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — contact cards */}
        <div className="w-full lg:w-[55%] flex flex-col gap-3">
          {CONTACT_LINKS.map((item, i) => (
            <ContactCard key={item.label} item={item} index={i} />
          ))}

          {/* CTA tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-[#D7E2EA] opacity-30 text-xs uppercase tracking-widest mt-4"
          >
            Available for freelance &amp; full-time opportunities
          </motion.p>
        </div>
      </div>
    </section>
  );
}
