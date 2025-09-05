// src/components/Topbar.tsx
"use client";
import { Bell, Search, Settings2 } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 ">
      {/* Left side */}
      <div className="flex flex-col gap-1 items-start">
        <div className="text-16 text-[#576172]">Dashboards</div>
        <h4 className="text-3xl font-semibold text-black">Central Dashboard</h4>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 bg-white p-2 rounded-full shadow-[0px_4px_40px_4px_#412BE012]">
        {/* Search */}
        <div className="flex items-center gap-2 rounded-full  bg-[#f1f1f1d2] px-4 py-2 w-[280px] ">
          <Search size={16} className="text-black" />
          <input
            className="flex-1 bg-transparent text-sm text-black outline-none placeholder:text-slate-400"
            placeholder="Search"
          />
        </div>

        {/* Settings */}
        <button className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 hover:bg-slate-50 shadow-sm">
          <Settings2 size={18} />
        </button>

        {/* Notifications */}
        <button className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 hover:bg-slate-50 shadow-sm">
          <Bell size={18} />
        </button>

        {/* Avatar */}
        <div className="size-9 rounded-full bg-[url('https://i.pravatar.cc/40?img=8')] bg-cover shadow-sm" />
      </div>
    </header>
  );
}