// src/components/Sidebar.tsx
import images from "@/lib/images";
import {
  Grid,
  FolderKanban,
  Users,
  BookOpen,
  BarChart3,
  Home,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex   flex-col w-[240px] bg-white rounded-3xl shadow-sm pb-[50px] group transition-shadow duration-300 ease-out hover:shadow-[0px_4px_40px_4px_#412BE012]" style={{ height: "1000px" }}> 
      <div className="flex flex-col flex-1">
        {/* Logo */}
        <div className="mb-6 pb-[40px] p-6 border-b border-slate-200">
          <div className="text-2xl font-bold text-black mt-[20px]">
            MonkMaze
          </div>
        </div>

        {/* Side Content */}
        <div className="flex flex-col h-full justify-between p-6">
          {/* Navigation */}
          <nav className="space-y-1 text-sm flex flex-col gap-3">
            <a className="flex items-center gap-3 rounded-xl px-3 py-2 text-black text-[16px] font-[600]">
              <Home size={22} color="black" /> Dashboards
            </a>
            <a className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100">
              <FolderKanban size={18} /> Projects
            </a>
            <a className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100">
              <Users size={18} /> Clients
            </a>
            <a className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100">
              <BookOpen size={18} /> CMS
            </a>
            <a className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100">
              <BarChart3 size={18} /> Analytics
            </a>
          </nav>

          {/* Cards */}
          <div>
            {/* Balance Card with hover upward motion */}
            <div
              className="
                mb-[50px] transform transition-transform duration-500 ease-out
                group-hover:-translate-y-9
              "
            >
              <img
                src={images.dashboard.total_Chart}
                alt="chart"
                width={250}
                height={350}
                className="rounded-2xl shadow-lg"
              />
            </div>

            {/* Profile */}
            <div className="mt-6 flex items-center gap-3">
              <div className="size-[50px] rounded-full bg-[url('https://i.pravatar.cc/48?img=12')] bg-cover" />
              <div className="flex flex-col items-start">
                <div className="text-[18px] font-[600] text-black">Shivay</div>
                <div className="text-[14px] text-[#9EA8C9]">
                  CEO & Co-Founder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}