interface LiveProjectButtonProps {
  className?: string;
  href?: string;
}

export default function LiveProjectButton({ className = "", href }: LiveProjectButtonProps) {
  return (
    <a
      href={href ?? "#"}
      target={href ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`rounded-full px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest whitespace-nowrap transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      Live Project
    </a>
  );
}
