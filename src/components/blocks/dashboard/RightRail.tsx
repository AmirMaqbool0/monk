// src/components/RightRail.tsx
import { Card } from "./Card";
import { KPIChip } from "./KPI";
import { Progress } from "./Progress";
import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function StarBadge() {
  const id = useId();
  return (
    <div className="avatar-wrap">
      <div className="size-7 rounded-full bg-white grid place-content-center border border-slate-200 shadow-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5AE6FF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path
            d="M12 3.5l2.18 4.42 4.88.71-3.53 3.44.83 4.86L12 14.98l-4.36 2.29.83-4.86L4.94 8.63l4.88-.71L12 3.5z"
            fill={`url(#${id})`}
          />
        </svg>
      </div>
    </div>
  );
}

interface StageProps {
  label: string;
  active?: boolean;
}

export function Stage({ label, active = false }: StageProps) {
  return (
    <div className="flex items-center gap-1">
      <div
        className={`w-3.5 h-3.5 rounded-full border 
        flex items-center justify-center
        ${active ? "bg-gradient-to-tr from-blue-500 to-cyan-400 border-transparent" : "bg-gray-200 border-gray-300"}`}
      >
        {active && (
          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
        )}
      </div>
      <span className="text-xs text-slate-600">{label}</span>
    </div>
  );
}

function InputRow({
  label,
  placeholder,
  suffix,
}: {
  label: string;
  placeholder?: string;
  suffix?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-14 text-xs text-slate-500">{label}</span>
      <div className="relative flex-1">
        <input className="input" placeholder={placeholder ?? "—"} />
        {suffix && <span className="suffix-tag">{suffix}</span>}
      </div>
    </div>
  );
}

function Avatar({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="avatar-wrap">
      <div className="avatar bg-slate-200">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : null}
      </div>
    </div>
  );
}

function LogRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0">
      <span className="text-sm text-slate-700">{label}</span>
      {value && (
        <span className="px-2 py-0.5 text-xs text-slate-600 rounded-full border border-slate-200">
          {value}
        </span>
      )}
    </div>
  );
}
 

export default function RightRail() {


  const initialData = [
  {
    user: "Shivay",
    time: "08:16 AM",
    note: "Real-time status updates powered by Monk AI",
    src: "https://i.pravatar.cc/100?img=11",
  },
  {
    user: "Soyindrila",
    time: "08:15 AM",
    note: "resolved 6 bugs",
    src: "https://i.pravatar.cc/100?img=22",
  },

];
  const [data, setData] = useState(initialData);

  // Shuffle function
  const shuffleData = () => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    setData(shuffled);
  };
const shimmerAnimation = `
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`
    const stages = ["Design", "Dev", "Review", "Launch"];
  const completed = 3; // how many steps are complet
  return (
    <aside className="hidden lg:flex lg:w-[320px] lg:flex-col lg:gap-4">
      {/* AI Success Rate */}

      <KPIChip
        icon={<StarBadge />}
        label="AI Success Rate"
        value="93.7%"
        hint="automated tasks"
      />

      {/* Delivery Progress */}
   {/* Inject keyframes as style */}
      <style>{shimmerAnimation}</style>

         <Card
        className="group rail-card transition-colors" 
        title="Delivery Progress"
        subtitle="Real-time status updates powered by Monk AI"
      >
        {/* Stage indicators */}
        <div className="mt-1 flex items-center gap-4 text-xs text-slate-500">
          {stages.map((s, i) => {
            // Before hover: active if < completed
            const isActive = i < completed;

            // On hover: last step (Launch) also turns active
            return (
              <Stage
                key={s}
                label={s}
                active={isActive}
              />
            );
          })}
        </div>

        {/* Steps counter */}
        <div className="mt-4 mb-2 text-sm">
          <span className="text-blue-600 font-semibold group-hover:text-indigo-600 transition">
            {completed}
          </span>
          <span className="text-slate-400">/{stages.length}</span>{" "}
          <span className="text-slate-600">Steps complete</span>
        </div>

        {/* Progress pill blocks */}
        <div className="flex gap-2">
          {stages.map((_, i) => {
            // Shared classes when hovered (all same solid indigo)
            const hoverClasses =
              "group-hover:bg-indigo-600 group-hover:animate-none";

            if (i < 2) {
              // First 2 pills solid
              return (
                <div
                  key={i}
                  className={`h-2.5 flex-1 rounded-full bg-indigo-600 transition-all duration-300 ${hoverClasses}`}
                />
              );
            }

            if (i === 2) {
              // Third pill shimmering before hover; becomes solid on hover
              return (
                <div
                  key={i}
                  className={`h-2.5 flex-1 rounded-full 
                    bg-gradient-to-r from-indigo-600 via-cyan-400 to-indigo-600 
                    bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite]
                    transition-all duration-300 ${hoverClasses}`}
                />
              );
            }

            if (i === 3) {
              // Fourth pill grey → solid on hover
              return (
                <div
                  key={i}
                  className={`h-2.5 flex-1 rounded-full bg-slate-200 transition-all duration-300 ${hoverClasses}`}
                />
              );
            }

            return null;
          })}
        </div>
      </Card>

      {/* Team Activity Feed */}
      <div onMouseEnter={shuffleData} className="h-full">
      <Card
        className="group rail-card cursor-pointer"
        title="Team Activity Feed"
        subtitle="Real-time status updates powered by Monk AI"
      >
        <ul>
          <AnimatePresence>
            {data.map((i) => (
              <motion.li
                key={i.user}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex items-center gap-3 py-3 border-b last:border-b-0"
              >
                <Avatar src={i.src} alt={i.user}  />
                <div className="flex-1 text-sm  ">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-800">{i.user}</span>
                    <span className="text-xs text-slate-400">{i.time}</span>
                  </div>
                  <div className="text-slate-500 text-start text-xs">{i.note}</div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </Card>
         </div>
      {/* Log Feed */}
      <Card
      className="rail-card"
      title="Log Feed"
      action={
        <span className="px-2 py-0.5 rounded-full bg-slate-700 text-xs text-white">
          Not Deployed
        </span>
      }
    >
      {/* Sub-header */}
      <div className="mb-2 flex items-center justify-between text-sm">
        <button className="font-medium text-indigo-600">Log Type</button>
        <button className="font-medium text-indigo-600">Entries</button>
      </div>

      {/* Log rows */}
      <div className="rounded-md  divide-y divide-slate-100">
        <LogRow label="Info" value="v4.2 uploaded" />
        <LogRow label="AI" value="Auto-tested" />
        <LogRow label="Deploy" value="CD pipeline initialized" />
        <LogRow label="QA" value="Smoke tests passed in 2.3s" />
      </div>

      {/* CTA button */}
      <button
        className="relative mt-5 w-full rounded-xl 
        bg-[linear-gradient(to_bottom,#ECECFC,#EBFAFE)] 
        px-4 py-3 text-center font-medium text-[#412BE0]
        hover:opacity-90 transition"
      >
        Push to Production
        <span className="absolute right-4 top-1/2 -translate-y-1/2">
          ⏎
        </span>
      </button>
    </Card>
    </aside>
  );
}
