import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/FadeIn";
import LiveProjectButton from "../components/LiveProjectButton";
import { ProjectMockup } from "../components/Icons";
import tree1 from "../assets/photos/global/tree (1).png";
import tree2 from "../assets/photos/global/tree (2).png";
import tree3 from "../assets/photos/global/tree (3).png";
import flow1 from "../assets/photos/flow/flow (1).png";
import flow2 from "../assets/photos/flow/flow (2).png";
import flow3 from "../assets/photos/flow/flow (3).png";
import car1 from "../assets/photos/car/car (1).png";
import car2 from "../assets/photos/car/car (2).png";
import car3 from "../assets/photos/car/car (3).png";
import lens1 from "../assets/photos/lens/lens (1).png";
import lens2 from "../assets/photos/lens/lens (2).png";
import lens3 from "../assets/photos/lens/lens (3).png";

interface Project {
  number: string;
  category: string;
  name: string;
  col1: ["chart" | "list" | "kanban" | "stats" | "auth" | "cards", "chart" | "list" | "kanban" | "stats" | "auth" | "cards"];
  col2: "chart" | "list" | "kanban" | "stats" | "auth" | "cards";
  href?: string;
  images?: [string, string, string];
}

const PROJECTS: Project[] = [
  {
    number: "01",
    category: "Personal",
    name: "FreelanceFlow — Freelance CRM",
    col1: ["kanban", "list"],
    col2: "stats",
    images: [flow1, flow3, flow2],
    href: "https://freelanceflow-two.vercel.app/login",
  },
  {
    number: "02",
    category: "Personal",
    name: "Datson (3D Model)",
    col1: ["chart", "list"],
    col2: "stats",
    images: [car1, car3, car2],
    href: "https://datsun-omega.vercel.app/",
  },
  {
    number: "03",
    category: "Personal",
    name: "Lumex (Scrollytelling)",
    col1: ["stats", "chart"],
    col2: "cards",
    images: [lens1, lens3, lens2],
    href: "https://lumex-sigma.vercel.app/",
  },
  {
    number: "04",
    category: "Personal",
    name: "Global Deforestation Tracker",
    col1: ["chart", "stats"],
    col2: "list",
    href: "https://global-deforestation.onrender.com/",
    images: [tree2, tree3, tree1],
  },
];

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={ref}
      className="h-[85vh] flex items-start justify-center sticky"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="sticky top-24 md:top-32 w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-8">
            <span
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm opacity-60">
                {project.category}
              </span>
              <span className="hero-heading font-black uppercase text-xl sm:text-2xl md:text-4xl leading-tight">
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.href} />
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col gap-3" style={{ width: "40%" }}>
            {project.images ? (
              <img
                src={project.images[0]}
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: "clamp(130px, 16vw, 230px)" }}
              />
            ) : (
              <ProjectMockup
                variant={project.col1[0]}
                className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: "clamp(130px, 16vw, 230px)" }}
              />
            )}
            {project.images ? (
              <img
                src={project.images[1]}
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: "clamp(160px, 22vw, 340px)" }}
              />
            ) : (
              <ProjectMockup
                variant={project.col1[1]}
                className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: "clamp(160px, 22vw, 340px)" }}
              />
            )}
          </div>
          <div style={{ width: "60%" }}>
            {project.images ? (
              <img
                src={project.images[2]}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            ) : (
              <ProjectMockup
                variant={project.col2}
                className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-32"
    >
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
