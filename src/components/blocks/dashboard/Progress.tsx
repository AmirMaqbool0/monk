// src/components/ui/Progress.tsx
import { cn } from "@/lib/cn";

export function Progress({
  value,
  className,
  showDot = false,
}: {
  value: number;
  className?: string;
  showDot?: boolean;
}) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={cn("progress-track", className)}>
      <div className="progress-bar" style={{ width: `${clamped}%` }} />
      {showDot && <span className="progress-dot" style={{ left: `calc(${clamped}% - 6px)` }} />}
    </div>
  );
}