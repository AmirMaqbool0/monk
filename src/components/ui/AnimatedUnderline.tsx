import React from "react";

interface AnimatedUnderlineProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({
  className = "",
  color = "#3A9AEE",
  width = 220,
  height = 20,
  style = {},
}) => {
  const w = width ?? 220;
  const h = height ?? 20;

  // Curve points
  const startX = 10;
  const endX = w - 10;
  const controlX = w / 2;
  const midY = h / 2;
  const downY = h - 5;
  const upY = 0;

  // For see-saw: animate left and right Y independently
  // 1. Left up, right down
  // 2. Flat
  // 3. Left down, right up
  // 4. Flat
  // 5. Repeat

  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      style={style}
    >
      <defs>
        <linearGradient id="glow" x1="0" y1={h / 2} x2={w} y2={h / 2} gradientUnits="userSpaceOnUse">
          <stop stopColor={color} stopOpacity="0.7" />
          <stop offset="1" stopColor={color} stopOpacity="1" />
        </linearGradient>
        <filter id="glowFilter" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        d={`M${startX} ${downY} Q ${controlX} ${midY}, ${endX} ${upY}`}
        stroke="url(#glow)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        filter="url(#glowFilter)"
      >
        <animate
          attributeName="d"
          values={`
            M${startX} ${upY} Q ${controlX} ${midY}, ${endX} ${downY};
            M${startX} ${downY} Q ${controlX} ${midY}, ${endX} ${upY};
            M${startX} ${upY} Q ${controlX} ${midY}, ${endX} ${downY}
          `}
          dur="12s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default AnimatedUnderline;