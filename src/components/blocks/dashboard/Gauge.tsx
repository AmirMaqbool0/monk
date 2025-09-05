// src/components/ui/Gauge.tsx
import { useId } from "react";
import { cn } from "@/lib/cn";

export function Gauge({
  value,
  size = 64,
  stroke = 6,
  from = "#38bdf8",      // indigo-500
  to = "#8b5cf6",        // sky-400
  trackFrom = "#EBFAFE", // top of track
  trackTo = "#ECECFC",   // bottom of track
  center,               // optional text in the middle
  caption,
  className,
}: {
  value: number;
  size?: number;
  stroke?: number;
  from?: string;
  to?: string;
  trackFrom?: string;
  trackTo?: string;
  center?: string | number;
  caption?: string;
  className?: string;
}) {
  const clamped = Math.max(0, Math.min(100, value));
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const dash = (clamped / 100) * circumference;
  const gap = circumference - dash;
  const id = useId();

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          {/* Gradient for arc */}
          <linearGradient id={`${id}-arc`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>

          {/* Gradient for track */}
          <linearGradient id={`${id}-track`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={trackFrom} />
            <stop offset="100%" stopColor={trackTo} />
          </linearGradient>
        </defs>

        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={`url(#${id}-track)`}
          strokeWidth={stroke}
          fill="none"
        />

        {/* Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={`url(#${id}-arc)`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${gap}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          fill="none"
        />

        {/* Center text */}
        {center !== undefined && center !== null && (
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-slate-900"
            style={{ fontSize: size * 0.32, fontWeight: 600 }}
          >
            {center}
          </text>
        )}
      </svg>

      {caption && <div className="mt-1 text-xs text-slate-500">{caption}</div>}
    </div>
  );
}
