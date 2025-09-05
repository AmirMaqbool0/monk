// src/components/ui/Card.tsx
import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  title,
  subtitle,
  action,
  headerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  headerClassName?: string;
}) {
  return (
    <section className={cn("card p-4", className)}>

      {(title || subtitle || action) && (
        <header className={cn(" flex items-center justify-between min-h-[44px] pb-1", headerClassName)}>
          <div className="flex flex-col items-center " style={{ alignItems: 'flex-start' }}>
            {title && <h3 className="text-slate-900  text-[12px] font-semibold">{title}</h3>}
            {subtitle && <p className="text-xs text-slate-500 text-start">{subtitle}</p>}
          </div>
          {action}
        </header>
      )}
      {children}
    </section>
  );
}