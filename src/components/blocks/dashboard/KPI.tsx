// src/components/ui/KPIChip.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function KPIChip({
  icon,
  label,
  value,
  hint,
  valueClass,
  className,
  orbSize = 44,
}: {
  icon?: ReactNode;
  label: string;
  value: string;
  hint?: string;
  valueClass?: string;
  className?: string;
  orbSize?: number;
}) {
  return (
    <div className={cn("kpi-card", className)}>
      <div className="flex-1 min-w-0">
        <div className="kpi-label">{label}</div>
        <div className={cn("kpi-value", valueClass)}>{value}</div>
        {hint && <div className="kpi-hint">{hint}</div>}
      </div>

      <div
        className="kpi-orb"
        style={{ width: orbSize, height: orbSize }}
        aria-hidden="true"
      >
        <div className="relative z-[1] text-sky-500">
          {/* Icon color can be tuned per chip via valueClass or inline className */}
          {icon}
        </div>
      </div>
    </div>
  );
}