// src/components/Topbar.tsx
"use client";
import { Bell, Search, Settings2 } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <div className="text-xs text-slate-500">Dashboards</div>
        <h1 className="text-2xl font-semibold text-slate-900">Central Dashboard</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="rounded-full pl-4 pr-2 py-2 flex items-center gap-2 w-[360px] border border-slate-200 bg-white">
          <Search size={16} className="text-slate-400" />
          <input className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Search" />
          <button className="rounded-xl bg-white px-2 py-1 text-xs text-slate-600 border border-slate-200">⌘K</button>
        </div>
        <button className="rounded-xl border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-50">
          <Settings2 size={18} />
        </button>
        <button className="rounded-xl border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-50">
          <Bell size={18} />
        </button>
        <div className="size-9 rounded-full bg-[url('https://i.pravatar.cc/40?img=8')] bg-cover" />
      </div>
    </header>
  );
}