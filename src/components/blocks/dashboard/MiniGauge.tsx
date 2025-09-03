// src/components/ui/MiniGauge.tsx
export function MiniGauge({
  value = 94,
  size = 36,
  color = "#6366f1",
  track = "#e5e7eb",
}: {
  value?: number;
  size?: number;
  color?: string;
  track?: string;
}) {
  const clamped = Math.max(0, Math.min(100, value));
  const angle = (clamped / 100) * 360;

  return (
    <div
      className="relative rounded-full"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(${color} ${angle}deg, ${track} 0deg)`,
      }}
    >
      <div
        className="absolute inset-1 rounded-full bg-white border border-slate-200"
        aria-hidden
      />
    </div>
  );
}