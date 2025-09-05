import Sidebar from "@/components/blocks/dashboard/Sidebar";
import Topbar from "@/components/blocks/dashboard/Topbar";
import { KPIChip } from "@/components/blocks/dashboard/KPI";
import { Card } from "@/components/blocks/dashboard/Card";
import VelocityArea from "@/components/blocks/dashboard/VelocityArea";
import RevenueGroupBars from "@/components/blocks/dashboard/RevenueBars";
import { Gauge } from "@/components/blocks/dashboard/Gauge";
import RightRail from "@/components/blocks/dashboard/RightRail";
import { DollarSign, Rocket, Package, Check } from "lucide-react";
import { ScaleToFit } from "../ui/ScaleToFit";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [value, setValue] = useState(64);
  const [shuffled, setShuffled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const rows = [
    { id: 1, client: "Tesla Inc.", platform: "Web + CRM", budget: "$97,500", status: "Ongoing", dot: "bg-red-500" },
    { id: 2, client: "Meta Labs", platform: "AI ERP", budget: "$212,000", status: "QA Stage", dot: "bg-gradient-to-br from-indigo-500 to-fuchsia-500" },
    { id: 3, client: "Ocean Co.", platform: "eCom + Mobile", budget: "$68,700", status: "Live", dot: "bg-slate-500" },
  ];

  const displayRows = shuffled ? [rows[1], rows[0], rows[2]] : rows;

  return (
    <main className="px-[15px] py-[15px]"> {/* 🔥 removed min-h-screen */}
      <ScaleToFit designWidth={1640} className="mx-auto w-full max-w-[1640px] h-full">
        <div className="shell p-5 lg:p-6">
          {/* window controls */}
          <div className="mb-5 hidden lg:flex gap-2">
            <div className="size-3 rounded-full bg-red-400" />
            <div className="size-3 rounded-full bg-yellow-300" />
            <div className="size-3 rounded-full bg-green-400" />
          </div>

          {/* Grid layout */}
          <div className="hidden lg:grid gap-6 grid-cols-[230px,1fr,320px] grid-rows-[auto,1fr] bg-[#F9F9F9] h-full">
            {/* Sidebar - spans all rows */}
            <div className="col-start-1 row-span-full">
              <Sidebar />
            </div>

            {/* Topbar - first row across center + right */}
            <div className="col-start-2 col-end-4 row-start-1">
              <Topbar />
            </div>

            {/* Center lane */}
            <div className="col-start-2 row-start-2 space-y-5">
              {/* KPI chips */}
              <div className="kpi-grid">
                <KPIChip icon={<DollarSign size={30} className="text-indigo-500" />} label="Total Revenue" value="$4.7M+" hint="delivered" />
                <KPIChip icon={<Rocket size={30} className="text-indigo-500" />} label="Live Deployments" value="35 Active" hint="across web, app, admin" />
                <KPIChip icon={<Package size={30} className="text-indigo-500" />} label="Projects Delivered" value="180+" hint="across 6 categories" />
              </div>

              {/* Charts row */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <Card
                  className="group h-[280px] w-full"
                  title="Delivery Velocity"
                  subtitle="Deployment speed boosted via CI/CD automation"
                  action={<span className="text-xs text-slate-500">Weekly ▾</span>}
                >
                  <div className="h-[200px]">
                    <VelocityArea />
                  </div>
                </Card>

                <div
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="h-[280px] w-full"
                >
                  <Card
                    className="h-full"
                    title="Revenue Growth Cycle"
                    subtitle="Real-time insights showing consistent growth across the week."
                    action={<span className="text-xs text-slate-500">Weekly ▾</span>}
                  >
                    <div className="h-[220px]">
                      <RevenueGroupBars hovered={hovered} />
                    </div>
                  </Card>
                </div>
              </div>

              {/* Compact info blocks */}
              <div className="grid grid-cols-5 gap-4">
                {/* SEO Score */}
                <Card className="w-full h-[150px] flex items-center flex-col justify-between" title="SEO Score">
                  <div
                    className="flex items-center justify-between flex-col w-full h-full cursor-pointer"
                    onMouseEnter={() => setValue(80)}
                    onMouseLeave={() => setValue(64)}
                  >
                    <div className="w-[120px]">
                      <Gauge value={value} size={54} />
                    </div>
                    <div className="text-slate-600 text-[14px] font-[400] mt-[10px]">{value}/100</div>
                  </div>
                </Card>

                {/* App Store Status */}
                <Card
                  className="w-full h-[150px] flex items-center flex-col justify-between group transition-all duration-300"
                  title="App Store Status"
                >
                  <div className="flex items-center flex-col">
                    <div className="mt-[-13px]">
                      <div className="relative grid place-items-center w-[60px] h-[60px] bg-white rounded-full shadow-[0px_4px_40px_4px_#412BE012] overflow-hidden">
                        <div className="spinner-ring transition-opacity duration-300 group-hover:opacity-0" style={{ width: 34, height: 34 }} />
                        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 text-white opacity-0 scale-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100">
                          <Check size={28} strokeWidth={3} />
                        </div>
                      </div>
                    </div>
                    <div className="text-slate-600 text-[12px] font-[400] mt-[10px]">Applying Changes</div>
                  </div>
                </Card>

                {/* AI Mode */}
                <Card className="w-full h-[150px] flex items-center flex-col justify-between" title="AI Mode">
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <span
                      className="relative inline-block h-6 w-12 rounded-full bg-[linear-gradient(to_bottom,#ECECFC,#EBFAFE)] transition-colors peer-checked:bg-[linear-gradient(90deg,#5AE6FF_0%,#8B5CF6_100%)] after:content-[''] after:absolute after:top-1 after:left-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-sm after:transition-transform peer-checked:after:translate-x-6 peer-checked:after:shadow-[0_2px_8px_rgba(99,102,241,0.35)]"
                      aria-hidden="true"
                    />
                  </label>
                  <div className="text-sm">
                    <div className="text-slate-600 text-[12px] font-[400]">Auto Deployment</div>
                  </div>
                </Card>

                {/* eCom Snapshot */}
                <Card
                  className="group w-full h-[150px] flex items-center flex-col justify-between cursor-pointer"
                  title="eCom Snapshot"
                >
                  <div className="text-[20px] font-semibold transition-transform duration-300 group-hover:scale-125">
                    <span className="text-[#2563eb]">324</span>
                    <span className="text-[#2563eb] ml-1">orders</span>
                  </div>
                  <div className="text-slate-600 text-[12px] font-[400]">21 returns</div>
                </Card>

                {/* Launch Countdown */}
                <Card className="w-full h-[150px] flex items-center flex-col justify-between" title="Launch Countdown">
                  <div className="grid place-content-center">
                    <div className="size-16">
                      <Gauge value={72} size={54} center="3d" />
                    </div>
                  </div>
                  <div className="text-sm text-slate-600">
                    <div className="text-slate-600 text-[12px] font-[400]">Next: CRM Update</div>
                  </div>
                </Card>
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* Client Ledger */}
                <Card
                  className="rounded-[20px] w-full"
                  title="Client Ledger"
                  action={<span className="action-caret">All ▾</span>}
                >
                  <div
                    className="table-surface"
                    onMouseEnter={() => setShuffled(true)}
                    onMouseLeave={() => setShuffled(false)}
                  >
                    <table className="w-full border-collapse">
                      <thead className="thead-soft">
                        <tr className="h-[42px]">
                          <th className="th px-4 py-2 text-left font-medium text-[#412BE0]">Client</th>
                          <th className="th px-4 py-2 text-left font-medium text-[#412BE0]">Platform</th>
                          <th className="th px-4 py-2 text-left font-medium text-[#412BE0]">Budget</th>
                          <th className="th px-4 py-2 text-left font-medium text-[#412BE0]">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <AnimatePresence>
                          {displayRows.map((row) => (
                            <motion.tr
                              key={row.id}
                              layout
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.4 }}
                              className="row"
                            >
                              <td className="cell px-4 py-2 text-left">
                                <div className="flex items-center gap-2">
                                  <span className="logo bg-white">
                                    <span className={`block size-3 rounded-full ${row.dot}`} />
                                  </span>
                                  <span>{row.client}</span>
                                </div>
                              </td>
                              <td className="cell px-4 py-2 text-left">{row.platform}</td>
                              <td className="cell px-4 py-2 text-left">{row.budget}</td>
                              <td className="cell px-4 py-2 text-left">{row.status}</td>
                            </motion.tr>
                          ))}
                        </AnimatePresence>
                      </tbody>
                    </table>
                  </div>
                </Card>

                {/* Sprint Taskboard */}
                <Card
                  className="rounded-[20px] w-full"
                  title="Sprint Taskboard"
                  action={
                    <div className="text-xs text-slate-600 flex items-center gap-3">
                      <span><span className="legend-dot bg-indigo-500 mr-1" />Manual</span>
                      <span><span className="legend-dot bg-emerald-500 mr-1" />AI</span>
                    </div>
                  }
                >
                  <div className="table-surface">
                    <table className="w-full border-collapse">
                      <thead className="thead-soft">
                        <tr className="h-[42px]">
                          <th className="th px-4 py-2 text-left font-medium text-[#412BE0]">Task</th>
                          <th className="th px-4 py-2 text-left font-medium text-[#412BE0]">Assigned</th>
                          <th className="th px-4 py-2 text-left font-medium text-[#412BE0]">Mode</th>
                          <th className="th px-4 py-2 text-left font-medium text-[#412BE0]">ETA</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="row">
                          <td className="cell px-4 py-2 text-left">App Design QA</td>
                          <td className="cell px-4 py-2 text-left">UI Team</td>
                          <td className="cell px-4 py-2 text-left"><span className="link-manual">Manual</span></td>
                          <td className="cell px-4 py-2 text-left">2 Days</td>
                        </tr>
                        <tr className="row">
                          <td className="cell px-4 py-2 text-left">Backend Refactor</td>
                          <td className="cell px-4 py-2 text-left">Infra Squad</td>
                          <td className="cell px-4 py-2 text-left"><span className="link-ai">AI</span></td>
                          <td className="cell px-4 py-2 text-left">1 Day</td>
                        </tr>
                        <tr className="row">
                          <td className="cell px-4 py-2 text-left">SEO Launch Campaign</td>
                          <td className="cell px-4 py-2 text-left">SEO Team</td>
                          <td className="cell px-4 py-2 text-left"><span className="link-manual">Manual</span></td>
                          <td className="cell px-4 py-2 text-left">3 Days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>

              {/* Footer links */}
              <div className="flex items-center justify-end gap-6 text-xs text-slate-400">
                <a className="hover:text-slate-600" href="#">Marketplace</a>
                <a className="hover:text-slate-600" href="#">License</a>
                <a className="hover:text-slate-600" href="#">Terms of Use</a>
                <a className="hover:text-slate-600" href="#">Blog</a>
              </div>
            </div>

            {/* Right lane */}
            <div className="col-start-3 row-start-2">
              <RightRail />
            </div>
          </div>
        </div>
      </ScaleToFit>

      {/* Mobile message */}
      <div className="lg:hidden text-center text-slate-300 py-24">
        This dashboard is lg-only. Resize to ≥1024px to view.
      </div>
    </main>
  );
}