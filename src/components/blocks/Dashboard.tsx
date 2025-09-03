import Sidebar from "@/components/blocks/dashboard/Sidebar";
import Topbar from "@/components/blocks/dashboard/Topbar";
import { KPIChip } from "@/components/blocks/dashboard/KPI";
import { Card } from "@/components/blocks/dashboard/Card";
import VelocityArea from "@/components/blocks/dashboard/VelocityArea";
import RevenueGroupBars from "@/components/blocks/dashboard/RevenueBars";
import { Gauge } from "@/components/blocks/dashboard/Gauge";
import RightRail from "@/components/blocks/dashboard/RightRail";
import { DollarSign, Rocket, Package } from "lucide-react";
import { ScaleToFit } from "../ui/ScaleToFit";

export default function Page() {
  return (
    <main className="min-h-screen px-6 py-10">
      {/* Scale the entire 1640px dashboard frame */}
      <ScaleToFit designWidth={1640} className="mx-auto w-full max-w-[1640px]">
        {/* White frame */}
        <div className="shell p-5 lg:p-6">
          {/* window controls */}
          <div className="mb-5 hidden lg:flex gap-2">
            <div className="size-3 rounded-full bg-red-400" />
            <div className="size-3 rounded-full bg-yellow-300" />
            <div className="size-3 rounded-full bg-green-400" />
          </div>

          {/* 3-lane grid locked to screenshot widths */}
          <div className="hidden lg:grid gap-6 grid-cols-[230px,1fr,270px]">
            {/* Left lane */}
            <Sidebar />

            {/* Center lane */}
            <div className="space-y-5">
              <Topbar />

              {/* KPI chips row */}
              <div className="kpi-grid">
                <KPIChip
                  icon={<DollarSign size={16} className="text-indigo-500" />}
                  label="Total Revenue"
                  value="$4.7M+"
                  hint="delivered"
                />
                <KPIChip
                  icon={<Rocket size={16} className="text-indigo-500" />}
                  label="Live Deployments"
                  value="35 Active"
                  hint="across web, app, admin"
                />
                <KPIChip
                  icon={<Package size={16} className="text-indigo-500" />}
                  label="Projects Delivered"
                  value="180+"
                  hint="across 6 categories"
                />
              </div>

              {/* Charts row: exact 7/5 split + fixed heights for alignment */}
              <div className="grid grid-cols-12 gap-4">
                <Card
                  className="col-span-7 h-[280px]"
                  title="Delivery Velocity"
                  subtitle="Deployment speed boosted via CI/CD automation"
                  action={<span className="text-xs text-slate-500">Weekly ▾</span>}
                >
                  <div className="h-[200px]">
                    <VelocityArea />
                  </div>
                </Card>
                <Card
                  className="col-span-5 h-[280px]"
                  title="Revenue Growth Cycle"
                  subtitle="Real-time insights showing consistent growth across the week."
                  action={<span className="text-xs text-slate-500">Weekly ▾</span>}
                >
                  <div className="h-[220px]">
                    <RevenueGroupBars />
                  </div>
                </Card>
              </div>

              {/* 5 compact info blocks row: uniform height */}
              <div className="grid grid-cols-5 gap-4">
                {/* SEO Score */}
                <Card
                  className="w-full h-[150px] flex items-center flex-col justify-between"
                  title="SEO Score"
                >
                  <div className="flex items-center justify-between flex-col">
                    <div className="w-[120px]">
                      <Gauge value={64} size={54} />
                    </div>
                    <div className="text-slate-600 text-[14px] font-[400] mt-[10px]">
                      64/100
                    </div>
                  </div>
                </Card>

                {/* App Store Status */}
                <Card
                  className="w-full h-[150px] flex items-center flex-col justify-between"
                  title="App Store Status"
                >
                  <div className="flex items-center flex-col">
                    <div className="">
                      {/* animated subtle spinner ring */}
                      <div className="grid place-items-center">
                        <div className="rounded-full bg-white">
                          <div className="">
                            <div className="rounded-full bg-white/80">
                              <div className="">
                                <div className="rounded-full border border-slate-100">
                                  <div className="">
                                    <div className="rounded-full">
                                      {/* Spinner */}
                                      <div className="mx-auto">
                                        <div className="rounded-full">
                                          {/* Use the component if you want: <SpinnerRing size={44} /> */}
                                          <div
                                            className="spinner-ring"
                                            style={{ width: 44, height: 44 }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-slate-600 text-[12px] font-[400] mt-[10px]">
                      Applying Changes
                    </div>
                  </div>
                </Card>

                {/* AI Mode */}
                <Card
                  className="w-full h-[150px] flex items-center flex-col justify-between"
                  title="AI Mode"
                >
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <span
                      className="
                        relative inline-block h-6 w-12 rounded-full bg-slate-200 transition-colors
                        peer-checked:bg-[linear-gradient(90deg,#5AE6FF_0%,#8B5CF6_100%)]
                        after:content-[''] after:absolute after:top-1 after:left-1 after:h-4 after:w-4
                        after:rounded-full after:bg-white after:shadow-sm after:transition-transform
                        peer-checked:after:translate-x-6
                        peer-checked:after:shadow-[0_2px_8px_rgba(99,102,241,0.35)]
                      "
                      aria-hidden="true"
                    />
                  </label>

                  <div className="text-sm">
                    <div className="text-slate-600 text-[12px] font-[400]">
                      Auto Deployment
                    </div>
                  </div>
                </Card>

                {/* eCom Snapshot */}
                <Card
                  className="w-full h-[150px] flex items-center flex-col justify-between"
                  title="eCom Snapshot"
                >
                  <div className="text-[20px] font-semibold">
                    <span className="text-[#2563eb] ">324</span>
                    <span className="text-[#2563eb] ml-1">orders</span>
                  </div>
                  <div className="text-slate-600 text-[12px] font-[400]">
                    21 returns
                  </div>
                </Card>

                {/* Launch Countdown */}
                <Card
                  className="w-full h-[150px] flex items-center flex-col justify-between"
                  title="Launch Countdown"
                >
                  <div className="grid place-content-center">
                    <div className="size-16">
                      <Gauge value={72} size={54} center="3d" />
                    </div>
                  </div>
                  <div className="text-sm text-slate-600">
                    <div className="text-slate-600 text-[12px] font-[400]">
                      Next: CRM Update
                    </div>
                  </div>
                </Card>
              </div>

              {/* Bottom row: 7/5 split like screenshot (no inner ScaleToFit) */}
              <div className="grid grid-cols-12 gap-4">
                {/* Client Ledger */}
                <Card
                  className="col-span-7 rounded-[20px]"
                  title="Client Ledger"
                  action={<span className="action-caret">All ▾</span>}
                >
                  <div className="table-surface">
                    <table className="w-full">
                      <thead className="thead-soft">
                        <tr className="h-[42px]">
                          <th className="th px-4">
                            <span className="th-link">Client</span>
                          </th>
                          <th className="th px-4">
                            <span className="th-link">Platform</span>
                          </th>
                          <th className="th px-4">
                            <span className="th-link">Budget</span>
                          </th>
                          <th className="th px-4">
                            <span className="th-link">Status</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="row">
                          <td className="cell">
                            <div className="name-cell">
                              <span className="logo bg-white">
                                <span className="block size-3 rounded-full bg-red-500" />
                              </span>
                              <span>Tesla Inc.</span>
                            </div>
                          </td>
                          <td className="cell">Web + CRM</td>
                          <td className="cell">$97,500</td>
                          <td className="cell">Ongoing</td>
                        </tr>
                        <tr className="row">
                          <td className="cell">
                            <div className="name-cell">
                              <span className="logo bg-white">
                                <span className="block size-3 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
                              </span>
                              <span>Meta Labs</span>
                            </div>
                          </td>
                          <td className="cell">AI ERP</td>
                          <td className="cell">$212,000</td>
                          <td className="cell">QA Stage</td>
                        </tr>
                        <tr className="row">
                          <td className="cell">
                            <div className="name-cell">
                              <span className="logo bg-white">
                                <span className="block size-3 rounded-full bg-slate-500" />
                              </span>
                              <span>Ocean Co.</span>
                            </div>
                          </td>
                          <td className="cell">eCom + Mobile</td>
                          <td className="cell">$68,700</td>
                          <td className="cell">Live</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>

                {/* Sprint Taskboard */}
                <Card
                  className="col-span-5 rounded-[20px]"
                  title="Sprint Taskboard"
                  action={
                    <div className="text-xs text-slate-600 flex items-center gap-3">
                      <span>
                        <span className="legend-dot bg-indigo-500 mr-1" />
                        Manual
                      </span>
                      <span>
                        <span className="legend-dot bg-emerald-500 mr-1" />
                        AI
                      </span>
                    </div>
                  }
                >
                  <div className="table-surface">
                    <table className="w-full">
                      <thead className="thead-soft">
                        <tr className="h-[42px]">
                          <th className="th px-4">
                            <span className="th-link">Task</span>
                          </th>
                          <th className="th px-4">
                            <span className="th-link">Assigned</span>
                          </th>
                          <th className="th px-4">
                            <span className="th-link">Mode</span>
                          </th>
                          <th className="th px-4">
                            <span className="th-link">ETA</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="row">
                          <td className="cell">App Design QA</td>
                          <td className="cell">UI Team</td>
                          <td className="cell">
                            <span className="link-manual">Manual</span>
                          </td>
                          <td className="cell-right">2 Days</td>
                        </tr>
                        <tr className="row">
                          <td className="cell">Backend Refactor</td>
                          <td className="cell">Infra Squad</td>
                          <td className="cell">
                            <span className="link-ai">AI</span>
                          </td>
                          <td className="cell-right">1 Day</td>
                        </tr>
                        <tr className="row">
                          <td className="cell">SEO Launch Campaign</td>
                          <td className="cell">SEO Team</td>
                          <td className="cell">
                            <span className="link-manual">Manual</span>
                          </td>
                          <td className="cell-right">3 Days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>

              {/* Footer links */}
              <div className="flex items-center justify-end gap-6 text-xs text-slate-400">
                <a className="hover:text-slate-600" href="#">
                  Marketplace
                </a>
                <a className="hover:text-slate-600" href="#">
                  License
                </a>
                <a className="hover:text-slate-600" href="#">
                  Terms of Use
                </a>
                <a className="hover:text-slate-600" href="#">
                  Blog
                </a>
              </div>
            </div>

            {/* Right lane inside the same white container */}
            <div className="mt-[70px]">
              <RightRail />
            </div>
          </div>
        </div>
      </ScaleToFit>

      {/* Keep your lg-only message outside the scaled area */}
      <div className="lg:hidden text-center text-slate-300 py-24">
        This dashboard is lg-only. Resize to ≥1024px to view.
      </div>
    </main>
  );
}