import FadeIn from "../components/FadeIn";

const SERVICES = [
  {
    number: "01",
    name: "Frontend Development",
    description:
      "Building responsive, performant interfaces with React and Tailwind CSS, translating Figma designs into pixel-accurate, cross-browser-compatible pages. I focus on component architecture, accessibility, and performance — ensuring every pixel matches the design and every interaction feels smooth across all devices and browsers.",
  },
  {
    number: "02",
    name: "Full Stack (MERN)",
    description:
      "End-to-end applications with the MERN stack — from designing MongoDB schemas and building Express REST APIs to wiring up React frontends with secure JWT authentication. I handle deployment, environment configuration, and keep codebases clean, modular, and easy to scale.",
  },
  {
    number: "03",
    name: "API & Backend Integration",
    description:
      "Designing and testing RESTful APIs, wiring up Firebase and Flask back ends, and handling real-time data with dependable, well-documented endpoints. I ensure robust error handling, proper status codes, and seamless integration between frontend clients and backend services.",
  },
  {
    number: "04",
    name: "UI Animation",
    description:
      "Adding polished micro-interactions and page transitions with Framer Motion so interfaces feel responsive, alive, and easy to use. From scroll-driven reveals and staggered list animations to gesture-based interactions — I make sure motion enhances usability rather than distracting from it.",
  },
  {
    number: "05",
    name: "Data Dashboards",
    description:
      "Turning raw CSV and API data into interactive dashboards and visualizations that make statistics easy to read and act on. I build filterable tables, animated charts, and summary cards that give users real insight — whether it's financial data, analytics, or scientific datasets.",
  },
];

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  return (
    <FadeIn>
      <div
        className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
        style={{ borderBottom: "1px solid rgba(12, 12, 12, 0.15)" }}
      >
        <span
          className="font-black text-[#0C0C0C] shrink-0"
          style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
        >
          {service.number}
        </span>
        <div className="flex flex-col gap-2 justify-center">
          <h3
            className="text-[#0C0C0C] font-black uppercase leading-tight"
            style={{ fontSize: "clamp(1.1rem, 2.4vw, 2.2rem)" }}
          >
            {service.name}
          </h3>
          <p
            className="text-[#0C0C0C]/60 font-light leading-relaxed max-w-2xl"
            style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.2rem)" }}
          >
            {service.description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-32"
    >
      <FadeIn delay={0}>
        <h2
          className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(2rem, 8vw, 110px)" }}
        >
          What do i do
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service) => (
          <ServiceCard key={service.number} service={service} />
        ))}
      </div>
    </section>
  );
}
