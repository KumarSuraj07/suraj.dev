import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeIn from "../components/FadeIn";

const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Lovely Professional University",
    period: "2020 – 2024",
    grade: "CGPA: 7.2",
    pct: 72,
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Kendriya Vidyalaya, Patna",
    period: "2019 – 2020",
    grade: "Percentage: 72%",
    pct: 72,
  },
  {
    degree: "Matriculation (Class X)",
    institution: "Kendriya Vidyalaya, Patna",
    period: "2017 – 2018",
    grade: "Percentage: 80%",
    pct: 80,
  },
];

// Icons sourced from Simple Icons / devicons colour palette
const SKILLS = [
  {
    name: "React", level: 90,
    icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><circle cx="12" cy="12" r="2.05" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/></svg>,
  },
  {
    name: "TypeScript", level: 82,
    icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><rect width="24" height="24" rx="3" fill="#3178C6"/><path d="M13.5 11.5H16v1.25h-2.5V16h-1.5v-3.25H9.5V11.5H12V9h1.5v2.5z" fill="white"/><path d="M17 13.5c0 1.38-1.12 2.5-2.5 2.5S12 14.88 12 13.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5z" fill="none"/><text x="3" y="17" fontSize="8" fontWeight="bold" fill="white" fontFamily="monospace">TS</text></svg>,
  },
  {
    name: "JavaScript", level: 88,
    icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><rect width="24" height="24" rx="3" fill="#F7DF1E"/><text x="3" y="17" fontSize="8" fontWeight="bold" fill="#000" fontFamily="monospace">JS</text></svg>,
  },
  {
    name: "Tailwind CSS", level: 85,
    icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.4 11 14.6 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.6 7 14.4 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.4 17 9.6 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.6 13 9.4 12 7 12z" fill="#38BDF8"/></svg>,
  },
  {
    name: "Framer Motion", level: 75,
    icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M4 4h16v8H4z" fill="#BB4BFF"/><path d="M4 12h8l8 8H4z" fill="#9B2FE0"/><path d="M4 12l8 8" stroke="#fff" strokeWidth="0" fill="none"/></svg>,
  },
  {
    name: "Node.js", level: 78,
    icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#339933" opacity="0.15" stroke="#339933" strokeWidth="1.2"/><text x="6" y="15.5" fontSize="6" fontWeight="bold" fill="#339933" fontFamily="monospace">NODE</text></svg>,
  },
  {
    name: "Express.js", level: 75,
    icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><rect width="24" height="24" rx="3" fill="#D7E2EA" fillOpacity="0.1"/><text x="2" y="15" fontSize="6.5" fontWeight="bold" fill="#D7E2EA" fontFamily="monospace">EXP</text></svg>,
  },
  {
    name: "MongoDB", level: 72,
    icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M12 2c0 0-5 6.5-5 11a5 5 0 0010 0C17 8.5 12 2 12 2z" fill="#47A248" opacity="0.2" stroke="#47A248" strokeWidth="1.2"/><line x1="12" y1="8" x2="12" y2="20" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    name: "Firebase", level: 70,
    icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M5 19L8.5 5l4 7-2 3L5 19z" fill="#FFA000"/><path d="M10.5 12l2-3.5L19 19H5l5.5-7z" fill="#FFCA28"/><path d="M14.5 8.5L19 19l-8.5-7 4-3.5z" fill="#FF6F00" opacity="0.7"/></svg>,
  },
  {
    name: "Python", level: 80,
    icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M12 2C9 2 7 3.5 7 5.5V8h5v1H5.5C3.5 9 2 10.5 2 13s1.5 4 3.5 4H7v-2.5c0-2 2-3.5 5-3.5s5 1.5 5 3.5V17h1.5c2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4H17V8h-5V7h5V5.5C17 3.5 15 2 12 2z" fill="#3776AB" opacity="0.8"/><circle cx="9.5" cy="5.5" r="1" fill="#FFD43B"/><circle cx="14.5" cy="18.5" r="1" fill="#FFD43B"/></svg>,
  },
  {
    name: "REST API", level: 85,
    icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><rect x="2" y="7" width="8" height="10" rx="2" stroke="#B600A8" strokeWidth="1.3"/><rect x="14" y="7" width="8" height="10" rx="2" stroke="#B600A8" strokeWidth="1.3"/><path d="M10 12h4M13 10l2 2-2 2" stroke="#B600A8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    name: "Git / GitHub", level: 88,
    icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#D7E2EA" opacity="0.85"/></svg>,
  },
];

function SkillCard({ skill, delay }: { skill: typeof SKILLS[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current!.getBoundingClientRect();
    mouseX.current = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    mouseY.current = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    cardRef.current!.style.transform = `perspective(600px) rotateY(${mouseX.current}deg) rotateX(${mouseY.current}deg) scale(1.04)`;
  }

  function handleMouseLeave() {
    cardRef.current!.style.transform = `perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)`;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay }}
      style={{ perspective: 600 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width: 140,
          background: "rgba(215,226,234,0.05)",
          border: "1px solid rgba(215,226,234,0.13)",
          borderRadius: 16,
          padding: "18px 14px 14px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07)",
          backdropFilter: "blur(10px)",
          transition: "transform 0.15s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 44, height: 44,
            borderRadius: 12,
            background: "rgba(215,226,234,0.08)",
            border: "1px solid rgba(215,226,234,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          {skill.icon}
        </div>

        {/* Name + % */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#D7E2EA", fontSize: 11, fontWeight: 600, letterSpacing: "0.03em" }}>{skill.name}</span>
            <span style={{ color: "rgba(215,226,234,0.45)", fontSize: 10 }}>{skill.level}%</span>
          </div>

          {/* Progress bar */}
          <div style={{ width: "100%", height: 5, borderRadius: 999, background: "rgba(215,226,234,0.1)", overflow: "hidden" }}>
            <motion.div
              style={{
                height: "100%",
                borderRadius: 999,
                background: "linear-gradient(90deg, #7621B0 0%, #B600A8 60%, #BE4C00 100%)",
                boxShadow: "0 0 8px rgba(182,0,168,0.5)",
              }}
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1.1, delay, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EduCard({ edu, index }: { edu: typeof EDUCATION[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      <div className="flex flex-col items-center shrink-0">
        <motion.div
          className="w-4 h-4 rounded-full border-2 border-[#B600A8] mt-1 shrink-0"
          style={{ background: "#0C0C0C", boxShadow: "0 0 10px rgba(182,0,168,0.7)" }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 }}
        />
        {index < EDUCATION.length - 1 && (
          <motion.div
            className="w-px flex-1 mt-2"
            style={{ background: "linear-gradient(180deg, rgba(182,0,168,0.5) 0%, rgba(215,226,234,0.1) 100%)" }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
          />
        )}
      </div>

      <motion.div
        className="flex-1 rounded-2xl sm:rounded-3xl p-5 sm:p-7 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        style={{ border: "1px solid rgba(215,226,234,0.15)", background: "rgba(215,226,234,0.04)" }}
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="flex-1">
          <h3 className="text-[#D7E2EA] font-semibold text-base sm:text-lg md:text-xl">{edu.degree}</h3>
          <p className="text-[#D7E2EA] opacity-60 text-sm sm:text-base mt-1">{edu.institution}</p>
          <div className="mt-3 w-full max-w-xs">
            <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(215,226,234,0.1)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #7621B0, #B600A8)" }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${edu.pct}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.15 + 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[#D7E2EA] opacity-50 text-sm">{edu.period}</p>
          <p className="text-[#D7E2EA] font-medium text-sm mt-1">{edu.grade}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
          style={{ fontSize: "clamp(2.5rem, 10vw, 130px)" }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto mb-24 sm:mb-32">
        {EDUCATION.map((edu, i) => (
          <EduCard key={i} edu={edu} index={i} />
        ))}
      </div>

      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
          style={{ fontSize: "clamp(2.5rem, 10vw, 130px)" }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-5 sm:gap-6">
        {SKILLS.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} delay={i * 0.05} />
        ))}
      </div>
    </section>
  );
}
