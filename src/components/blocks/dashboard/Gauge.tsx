// src/components/ui/Gauge.tsx
import { useId } from "react";
import { cn } from "@/lib/cn";

export function Gauge({
  value,
  size = 64,
  stroke = 8,
  from = "#8b5cf6",      // indigo-500
  to = "#38bdf8",        // sky-400
  track = "#e5e7eb",     // slate-200
  center,                // optional text in the middle, e.g. "3d"
  caption,
  className,
}: {
  value: number;
  size?: number;
  stroke?: number;
  from?: string;
  to?: string;
  track?: string;
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
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>

        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={track}
          strokeWidth={stroke}
          fill="none"
        />
        {/* Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={`url(#${id})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${gap}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          fill="none"
        />

        {/* Center text when provided */}
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