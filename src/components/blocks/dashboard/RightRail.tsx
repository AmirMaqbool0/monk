// src/components/RightRail.tsx
import { Card } from "./Card";
import { Progress } from "./Progress";
import { useId } from "react";

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

function Stage({ color, label }: { color: string; label: string }) {
  return (
    <span className="chip">
      <span className="chip-dot" style={{ backgroundColor: color }} />
      {label}
    </span>
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

export default function RightRail() {
  return (
    <aside className="hidden lg:flex lg:w-[270px] lg:flex-col lg:gap-4">
      {/* AI Success Rate */}
      <Card className="rail-card h-[120px] flex items-center justify-between">
        <div className="flex items-start w-full justify-between">
          <div>
            <div className="rail-title">AI Success Rate</div>
            <div className="mt-1 text-[22px] font-semibold leading-none">
              <span className="text-gradient">93.7%</span>
            </div>
            <div className="mt-1 rail-title">automated tasks</div>
          </div>
          <StarBadge />
        </div>
      </Card>

      {/* Delivery Progress */}
      <Card className="rail-card" title="Delivery Progress" subtitle="Real-time status updates powered by Monk AI">
        <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
          <Stage color="#60a5fa" label="Design" />
          <Stage color="#34d399" label="Dev" />
          <Stage color="#fbbf24" label="Review" />
          <Stage color="#6366f1" label="Launch" />
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <div className="mb-1 flex items-center justify-between text-xs text-slate-600">
              <span className="count-pill">
                <b>3.</b> Steps complete
              </span>
              <span>3</span>
            </div>
            <Progress value={75} showDot />
          </div>

          <div>
            <div className="mb-1 flex justify-between text-xs text-slate-600">
              <span>QA</span>
              <span>56%</span>
            </div>
            <Progress value={56} showDot />
          </div>

          <div>
            <div className="mb-1 flex justify-between text-xs text-slate-600">
              <span>Deploy</span>
              <span>28%</span>
            </div>
            <Progress value={28} />
          </div>
        </div>
      </Card>

      {/* Team Activity Feed */}
      <Card className="rail-card" title="Team Activity Feed" subtitle="Real-time status updates powered by Monk AI">
        <ul className="space-y-3">
          {[
            { user: "Shivay", time: "09:15 AM", note: "pushed to main", src: "" },
            { user: "Scyndria", time: "08:50 AM", note: "opened PR #324", src: "" },
          ].map((i, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <Avatar src={i.src} alt={i.user} />
              <div className="flex-1 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-slate-800">{i.user}</span>
                  <span className="text-xs text-slate-400">{i.time}</span>
                </div>
                <div className="text-slate-500">{i.note}</div>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* Log Feed */}
      <Card className="rail-card" title="Log Feed" action={<span className="chip">Live</span>}>
        <div className="mb-2 flex items-center justify-between">
          <button className="text-[12px] font-medium text-indigo-600">Log Type</button>
          <div className="seg">
            <button className="seg-btn" data-active="true">
              Entries
            </button>
            <button className="seg-btn" data-active="false">
              Errors
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <InputRow label="Info" placeholder="—" />
          <InputRow label="AI" placeholder="auto-responder" suffix="auto" />
          <InputRow label="Deploy" placeholder="CI pipeline…" suffix="pending" />
          <InputRow label="QA" placeholder="—" />
        </div>

        <button className="btn-gradient mt-4">
          Push to Production
          <span className="absolute right-2 top-1/2 -translate-y-1/2 grid size-6 place-content-center rounded-full bg-white/30">
            🚀
          </span>
        </button>
      </Card>
    </aside>
  );
}