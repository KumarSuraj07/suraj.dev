export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-5 sm:px-8 md:px-10 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="font-black uppercase tracking-widest"
          style={{
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            background: "linear-gradient(180deg, #646973 0%, #bbccd7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Suraj.dev
        </span>
        <p className="text-[#D7E2EA] opacity-30 text-xs uppercase tracking-widest text-center">
          © {new Date().getFullYear()} Suraj Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
