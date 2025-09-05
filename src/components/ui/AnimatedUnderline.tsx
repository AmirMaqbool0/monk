import React from "react";

interface AnimatedUnderlineProps {
  className?: string;
  color?: string;          // if provided → solid stroke
  width?: number;          // actual pixel width
  style?: React.CSSProperties;
}

const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({
  className = "",
  color,
  width = 559,
  style = {},
}) => {
  // maintain aspect ratio of original 559x85
  const ratio = 85 / 559;
  const w = width ?? 559;
  const h = w * ratio;

  const useSolidColor = Boolean(color); // decide stroke mode
  const strokeValue = useSolidColor ? color! : "url(#underlineGradient)";

  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox="0 0 559 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Only define gradient if needed */}
      {!useSolidColor && (
        <defs>
          <linearGradient id="underlineGradient" x1="0" y1="42" x2="559" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3AEFFF" />
            <stop offset="50%" stopColor="#412BE0" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      )}

      <defs>
        <filter id="glowFilter" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M38 43C123.456 36.2084 339.694 26.7001 521 43"
        stroke={strokeValue}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glowFilter)"
      >
        <animate
          attributeName="d"
          dur="6s"
          repeatCount="indefinite"
          values={`
            M38 43C123.456 36.2 339.694 26.7 521 43;
            M38 40C123.456 34.0 339.694 24.5 521 40;
            M38 46C123.456 38.5 339.694 28.9 521 46;
            M38 43C123.456 36.2 339.694 26.7 521 43
          `}
        />
      </path>
    </svg>
  );
};

export default AnimatedUnderline;