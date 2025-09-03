// src/components/Sidebar.tsx
import { Grid, FolderKanban, Users, BookOpen, BarChart3 } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col">
      <div className="card rounded-3xl p-5 flex-1">
        <div className="mb-6">
          <div className="text-2xl font-semibold text-slate-900">MonkMaze</div>
        </div>

        <nav className="space-y-1">
          <a className="flex items-center gap-3 rounded-xl px-3 py-2 bg-slate-900/5 text-slate-900">
            <Grid size={18} /> Dashboards
          </a>
          <a className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-900/5">
            <FolderKanban size={18} /> Projects
          </a>
          <a className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-900/5">
            <Users size={18} /> Clients
          </a>
          <a className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-900/5">
            <BookOpen size={18} /> CMS
          </a>
          <a className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-900/5">
            <BarChart3 size={18} /> Analytics
          </a>
        </nav>

        <div
          className="mt-6 rounded-2xl p-4 text-white"
          style={{
            background: "linear-gradient(170deg, #4f46e5 0%, #22d3ee 100%)",
            boxShadow: "0 12px 28px rgba(79,70,229,.35)",
          }}
        >
          <div className="text-sm/5 opacity-90">Total balance</div>
          <div className="mt-1 text-2xl font-semibold">$3942.58</div>
          <div className="mt-3 h-24 rounded-xl bg-white/15 border border-white/20" />
        </div>

        <div className="mt-4 card p-3 flex items-center gap-3">
          <div className="size-10 rounded-full bg-[url('https://i.pravatar.cc/48?img=12')] bg-cover" />
          <div>
            <div className="text-sm font-medium text-slate-900">Shivay</div>
            <div className="text-xs text-slate-500">CEO & CO-Founder</div>
          </div>
        </div>
      </div>
    </aside>
  );
}