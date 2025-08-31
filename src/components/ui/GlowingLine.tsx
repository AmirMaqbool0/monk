"use client";
import React from "react";

type GlowingLineProps = {
  direction?: "left" | "right";
  flipped?: boolean;
  delay?: number;
};

const GlowingLine: React.FC<GlowingLineProps> = ({
  direction = "right",
  flipped = false,
  delay = 0,
}) => {
  const animationValues = "2000;-200";
  const normalPath = "M0,80 C300,40 1620,40 1920,80";
  const flippedPath = "M0,40 C300,80 1620,80 1920,40";
  const currentPath = flipped ? flippedPath : normalPath;

  // unique gradient id per instance (avoids collisions)
  const gradientId = React.useRef(
    `glow-${Math.random().toString(36).slice(2, 9)}`
  ).current;

  return (
    <div className="relative w-full overflow-hidden">
      <svg
        width="100%"
        height="120"
        viewBox="0 0 1920 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Base Line */}
        <path
          d={currentPath}
          stroke="#F4F3F9"
          strokeOpacity="0.5"
          strokeWidth="3"
          fill="transparent"
        />

        {/* Glow Line (animated) */}
        <path
          d={currentPath}
          stroke={`url(#${gradientId})`}
          strokeWidth="5"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray="200 2000"
          strokeDashoffset="0"
        >
          <animate
            attributeName="stroke-dashoffset"
            values={animationValues}
            dur="5s"
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
        </path>

        {/* Gradient: #412BE0 -> #FFFFFF */}
        <defs>
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="1920"
            y2="0"
          >
            <stop offset="0%" stopColor="#412BE0" stopOpacity="0" />
            <stop offset="35%" stopColor="#412BE0" stopOpacity="1" />
            <stop offset="75%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GlowingLine;
