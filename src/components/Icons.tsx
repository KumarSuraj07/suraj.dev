import { useId } from "react";

// Self-contained decorative SVG graphics used in place of external/hotlinked
// imagery — kept in the site's own dark + steel-gradient + violet-accent palette.

export function HeroPortrait() {
  return (
    <svg viewBox="0 0 520 520" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="portraitBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a2c31" />
          <stop offset="100%" stopColor="#0c0c0c" />
        </linearGradient>
        <linearGradient id="portraitRing" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#646973" />
          <stop offset="100%" stopColor="#BBCCD7" />
        </linearGradient>
        <linearGradient id="portraitAccent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="7%" stopColor="#18011F" />
          <stop offset="37%" stopColor="#B600A8" />
          <stop offset="72%" stopColor="#7621B0" />
          <stop offset="100%" stopColor="#BE4C00" />
        </linearGradient>
      </defs>

      <circle cx="260" cy="260" r="250" fill="url(#portraitBg)" />
      <circle cx="260" cy="260" r="250" fill="none" stroke="url(#portraitRing)" strokeWidth="2" opacity="0.5" />

      {/* orbiting accent ring */}
      <circle cx="260" cy="260" r="205" fill="none" stroke="url(#portraitAccent)" strokeWidth="3" strokeDasharray="10 14" opacity="0.7" />

      {/* code-bracket silhouette */}
      <text
        x="50%"
        y="46%"
        textAnchor="middle"
        fontFamily="'Kanit', sans-serif"
        fontWeight="900"
        fontSize="190"
        fill="url(#portraitRing)"
        opacity="0.9"
      >
        {"</>"}
      </text>

      {/* monogram */}
      <text
        x="50%"
        y="78%"
        textAnchor="middle"
        fontFamily="'Kanit', sans-serif"
        fontWeight="700"
        letterSpacing="10"
        fontSize="40"
        fill="#D7E2EA"
      >
        SURAJ.DEV
      </text>
    </svg>
  );
}

interface DecoIconProps {
  className?: string;
}

export function TerminalIcon({ className = "" }: DecoIconProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="terminalGrad_u" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#646973" />
          <stop offset="100%" stopColor="#BBCCD7" />
        </linearGradient>
      </defs>
      <rect x="10" y="30" width="180" height="140" rx="18" fill="#151515" stroke="url(#terminalGrad_u)" strokeWidth="3" />
      <circle cx="35" cy="52" r="5" fill="#BBCCD7" opacity="0.6" />
      <circle cx="52" cy="52" r="5" fill="#BBCCD7" opacity="0.4" />
      <circle cx="69" cy="52" r="5" fill="#BBCCD7" opacity="0.2" />
      <path d="M30 90 L55 108 L30 126" stroke="url(#terminalGrad_u)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="70" y1="126" x2="130" y2="126" stroke="url(#terminalGrad_u)" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function DatabaseIcon({ className = "" }: DecoIconProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dbGrad_u" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#646973" />
          <stop offset="100%" stopColor="#BBCCD7" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="55" rx="70" ry="28" fill="#151515" stroke="url(#dbGrad_u)" strokeWidth="3" />
      <path d="M30 55 V145 A70 28 0 0 0 170 145 V55" fill="#151515" stroke="url(#dbGrad_u)" strokeWidth="3" />
      <path d="M30 100 A70 28 0 0 0 170 100" fill="none" stroke="url(#dbGrad_u)" strokeWidth="3" opacity="0.6" />
    </svg>
  );
}

export function BrowserIcon({ className = "" }: DecoIconProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="browserGrad_u" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#646973" />
          <stop offset="100%" stopColor="#BBCCD7" />
        </linearGradient>
      </defs>
      <rect x="15" y="35" width="170" height="130" rx="14" fill="#151515" stroke="url(#browserGrad_u)" strokeWidth="3" />
      <line x1="15" y1="65" x2="185" y2="65" stroke="url(#browserGrad_u)" strokeWidth="3" />
      <circle cx="34" cy="50" r="4" fill="#BBCCD7" opacity="0.6" />
      <circle cx="48" cy="50" r="4" fill="#BBCCD7" opacity="0.4" />
      <rect x="34" y="90" width="132" height="14" rx="7" fill="url(#browserGrad_u)" opacity="0.5" />
      <rect x="34" y="115" width="90" height="10" rx="5" fill="url(#browserGrad_u)" opacity="0.3" />
      <rect x="34" y="135" width="110" height="10" rx="5" fill="url(#browserGrad_u)" opacity="0.3" />
    </svg>
  );
}

export function ApiIcon({ className = "" }: DecoIconProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="apiGrad_u" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#646973" />
          <stop offset="100%" stopColor="#BBCCD7" />
        </linearGradient>
      </defs>
      <rect x="20" y="60" width="60" height="60" rx="14" fill="#151515" stroke="url(#apiGrad_u)" strokeWidth="3" />
      <rect x="120" y="60" width="60" height="60" rx="14" fill="#151515" stroke="url(#apiGrad_u)" strokeWidth="3" />
      <line x1="80" y1="90" x2="120" y2="90" stroke="url(#apiGrad_u)" strokeWidth="4" strokeDasharray="6 6" />
      <circle cx="100" cy="90" r="6" fill="url(#apiGrad_u)" />
    </svg>
  );
}

// Abstract UI mockup tiles used inside project cards
export function ProjectMockup({
  variant,
  className = "",
  style,
}: {
  variant: "chart" | "list" | "kanban" | "stats" | "auth" | "cards";
  className?: string;
  style?: React.CSSProperties;
}) {
  const rawId = useId();
  const id = rawId.replace(/:/g, "");
  const accentId = `mockAccent_${id}`;
  const steelId = `mockSteel_${id}`;
  const accent = `url(#${accentId})`;
  return (
    <svg viewBox="0 0 400 260" className={className} style={style} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={accentId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="7%" stopColor="#18011F" />
          <stop offset="37%" stopColor="#B600A8" />
          <stop offset="72%" stopColor="#7621B0" />
          <stop offset="100%" stopColor="#BE4C00" />
        </linearGradient>
        <linearGradient id={steelId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a3d43" />
          <stop offset="100%" stopColor="#181818" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#${steelId})`} />

      {variant === "chart" && (
        <>
          <rect x="30" y="150" width="30" height="70" rx="6" fill={accent} opacity="0.85" />
          <rect x="75" y="110" width="30" height="110" rx="6" fill="#D7E2EA" opacity="0.5" />
          <rect x="120" y="170" width="30" height="50" rx="6" fill={accent} opacity="0.6" />
          <rect x="165" y="90" width="30" height="130" rx="6" fill="#D7E2EA" opacity="0.7" />
          <rect x="210" y="130" width="30" height="90" rx="6" fill={accent} opacity="0.85" />
          <rect x="30" y="40" width="120" height="16" rx="8" fill="#D7E2EA" opacity="0.3" />
        </>
      )}
      {variant === "list" && (
        <>
          <rect x="30" y="35" width="150" height="18" rx="9" fill="#D7E2EA" opacity="0.35" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x="30" y={80 + i * 42} width="340" height="30" rx="10" fill="#151515" stroke="#D7E2EA" strokeOpacity="0.15" />
              <circle cx="50" cy={95 + i * 42} r="8" fill={accent} opacity="0.8" />
              <rect x="70" y={90 + i * 42} width="150" height="10" rx="5" fill="#D7E2EA" opacity="0.4" />
              <rect x="300" y={90 + i * 42} width="50" height="10" rx="5" fill={accent} opacity="0.7" />
            </g>
          ))}
        </>
      )}
      {variant === "kanban" && (
        <>
          {[0, 1, 2].map((col) => (
            <g key={col}>
              <rect x={25 + col * 128} y="30" width="110" height="200" rx="12" fill="#151515" stroke="#D7E2EA" strokeOpacity="0.15" />
              <rect x={40 + col * 128} y="45" width="60" height="10" rx="5" fill="#D7E2EA" opacity="0.4" />
              <rect x={40 + col * 128} y="70" width="80" height="40" rx="8" fill={accent} opacity={0.3 + col * 0.2} />
              <rect x={40 + col * 128} y="120" width="80" height="40" rx="8" fill="#D7E2EA" opacity="0.12" />
            </g>
          ))}
        </>
      )}
      {variant === "stats" && (
        <>
          {[0, 1].map((i) => (
            <rect key={i} x={30 + i * 190} y="30" width="170" height="70" rx="14" fill="#151515" stroke="#D7E2EA" strokeOpacity="0.15" />
          ))}
          <rect x="45" y="45" width="60" height="10" rx="5" fill="#D7E2EA" opacity="0.4" />
          <rect x="45" y="65" width="90" height="20" rx="6" fill={accent} opacity="0.8" />
          <rect x="235" y="45" width="60" height="10" rx="5" fill="#D7E2EA" opacity="0.4" />
          <rect x="235" y="65" width="90" height="20" rx="6" fill="#D7E2EA" opacity="0.6" />
          <path d="M30 150 L90 170 L150 130 L210 190 L270 110 L330 160 L370 140" stroke={accent} strokeWidth="4" fill="none" opacity="0.85" />
        </>
      )}
      {variant === "auth" && (
        <>
          <rect x="120" y="35" width="160" height="190" rx="16" fill="#151515" stroke="#D7E2EA" strokeOpacity="0.15" />
          <circle cx="200" cy="80" r="20" fill={accent} opacity="0.8" />
          <rect x="140" y="115" width="120" height="14" rx="7" fill="#D7E2EA" opacity="0.15" />
          <rect x="140" y="140" width="120" height="14" rx="7" fill="#D7E2EA" opacity="0.15" />
          <rect x="140" y="175" width="120" height="24" rx="12" fill={accent} opacity="0.85" />
        </>
      )}
      {variant === "cards" && (
        <>
          {[0, 1].map((i) => (
            <g key={i}>
              <rect x="30" y={30 + i * 105} width="340" height="90" rx="14" fill="#151515" stroke="#D7E2EA" strokeOpacity="0.15" />
              <rect x="50" y={55 + i * 105} width="90" height="12" rx="6" fill="#D7E2EA" opacity="0.4" />
              <rect x="50" y={80 + i * 105} width="140" height="8" rx="4" fill="#D7E2EA" opacity="0.2" />
              <rect x="290" y={55 + i * 105} width="60" height="24" rx="12" fill={accent} opacity="0.8" />
            </g>
          ))}
        </>
      )}
    </svg>
  );
}

export function TechTile({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl select-none ${className}`}
      style={{
        background: "linear-gradient(135deg, #1c1c1f 0%, #0c0c0c 100%)",
        border: "1px solid rgba(215, 226, 234, 0.15)",
      }}
    >
      <span
        className="uppercase font-semibold tracking-widest text-center px-4"
        style={{
          fontSize: "clamp(1rem, 2vw, 1.6rem)",
          background: "linear-gradient(180deg, #646973 0%, #BBCCD7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {label}
      </span>
    </div>
  );
}
