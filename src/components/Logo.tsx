import Link from "next/link";

function SMarkSVG({
  bg = "#1B2A4A",
  fg = "#ffffff",
  size = 40,
}: {
  bg?: string;
  fg?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <rect width="64" height="64" fill={bg} />
      <rect x="12" y="11" width="28" height="9" fill={fg} />
      <rect x="12" y="11" width="9" height="22" fill={fg} />
      <rect x="12" y="27" width="40" height="9" fill={fg} />
      <rect x="43" y="36" width="9" height="22" fill={fg} />
      <rect x="24" y="49" width="28" height="9" fill={fg} />
    </svg>
  );
}

interface LogoProps {
  variant?: "light" | "dark" | "mark";
  size?: number;
  className?: string;
}

export default function Logo({
  variant = "light",
  size = 40,
  className = "",
}: LogoProps) {
  const isDark = variant === "dark";
  const markBg = isDark ? "#E8621A" : "#1B2A4A";
  const markFg = "#ffffff";
  const wordmarkColor = isDark ? "#ffffff" : "#1B2A4A";
  const tagColor = "#888888";

  if (variant === "mark") {
    return (
      <Link href="/" aria-label="Super Media home" className={className}>
        <SMarkSVG bg={markBg} fg={markFg} size={size} />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 no-underline ${className}`}
      aria-label="Super Media home"
    >
      <SMarkSVG bg={markBg} fg={markFg} size={size} />
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontSize: "21px",
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: wordmarkColor,
            lineHeight: 1,
          }}
        >
          SUPER
        </span>
        <span
          style={{
            fontSize: "9px",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: tagColor,
            marginTop: "3px",
            lineHeight: 1,
          }}
        >
          MEDIA
        </span>
      </div>
    </Link>
  );
}
