// app/page.tsx (Next.js App Router) or pages/index.tsx (Pages Router)
// Requires: npm i recharts lucide-react
// Tailwind should already be configured in your project.

"use client";

import React, { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip as ReTooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Search,
  Bell,
  Plus,
  Home,
  BarChart2,
  Rocket,
  Settings,
} from "lucide-react";

/* ============== UI PRIMITIVES ============== */

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};
function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition",
        variant === "primary" &&
          "bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_10px_40px_rgba(59,130,246,.25)]",
        variant === "ghost" && "text-slate-700 hover:bg-slate-100",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

function Progress({ value }: { value: number }) {
  return (
    <div className="h-2 w-full rounded bg-slate-100">
      <div
        className="h-2 rounded bg-indigo-600 transition-all"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

function Card({
  title,
  subtitle,
  action,
  className = "",
  children,
}: {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "rounded-xl bg-white/80 p-4 sm:p-5 shadow-[0_10px_30px_rgba(16,24,40,0.08)] ring-1 ring-black/5 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        className,
      ].join(" ")}
    >
      {(title || subtitle || action) && (
        <div className="mb-3 flex items-center justify-between">
          <div>
            {subtitle && (
              <div className="text-xs text-slate-500">{subtitle}</div>
            )}
            {title && <h3 className="text-sm font-semibold">{title}</h3>}
          </div>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

/* ============== MOCK DATA ============== */

const kpis = [
  { title: "Total Revenue", value: "$4.7M+", delta: "+12.5%", id: "rev" },
  { title: "Live Deployments", value: "35 Active", delta: "+3", id: "deploy" },
  { title: "Projects Delivered", value: "180+", delta: "+8", id: "proj" },
  { title: "AI Success Rate", value: "93.7%", delta: "+1.2%", id: "ai" },
];

const weeklyLine = [
  { name: "Mon", value: 18 },
  { name: "Tue", value: 22 },
  { name: "Wed", value: 21 },
  { name: "Thu", value: 24 },
  { name: "Fri", value: 23 },
  { name: "Sat", value: 28 },
  { name: "Sun", value: 34 },
];

const monthlyLine = Array.from({ length: 12 }).map((_, i) => ({
  name: `W${i + 1}`,
  value: Math.round(15 + Math.random() * 25),
}));

const barGroups = [
  { name: "Jan", a: 12, b: 9, c: 6 },
  { name: "Feb", a: 17, b: 10, c: 8 },
  { name: "Mar", a: 21, b: 12, c: 9 },
  { name: "Apr", a: 24, b: 15, c: 10 },
  { name: "May", a: 28, b: 18, c: 12 },
  { name: "Jun", a: 26, b: 16, c: 11 },
];

const pieData = [
  { name: "New", value: 48, color: "#4f46e5" },
  { name: "Returning", value: 32, color: "#22c55e" },
  { name: "Churned", value: 20, color: "#ef4444" },
];

const feed = [
  { id: 1, user: "Shivay", text: "pushed to main", time: "3m" },
  { id: 2, user: "Andrea", text: "opened PR #324", time: "25m" },
  { id: 3, user: "Christian", text: "created sprint board", time: "1h" },
  { id: 4, user: "Jacob", text: "commented on issue #112", time: "2h" },
];

const team = [
  { id: 1, name: "Andre Paulson", role: "Lead Dev", status: "online" },
  { id: 2, name: "Christian Hall", role: "Data Eng", status: "idle" },
  { id: 3, name: "Jacob Winston", role: "PM", status: "offline" },
  { id: 4, name: "Shivay", role: "QA", status: "online" },
];

/* ============== FEATURE CARDS ============== */

function StatCard({
  title,
  value,
  delta,
}: {
  title: string;
  value: string;
  delta: string;
}) {
  const positive = delta.trim().startsWith("+");
  return (
    <Card>
      <div className="text-xs text-slate-500">{title}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <div className="text-2xl font-bold">{value}</div>
        <span
          className={[
            "rounded-md px-1.5 py-0.5 text-xs",
            positive
              ? "bg-emerald-50 text-emerald-700"
              : "bg-rose-50 text-rose-700",
          ].join(" ")}
        >
          {delta}
        </span>
      </div>
    </Card>
  );
}

function ActivityFeed() {
  return (
    <Card title="Team Activity Feed">
      <ul className="space-y-3">
        {feed.map((item) => (
          <li key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-slate-200" />
              <div>
                <div className="text-sm">
                  <span className="font-medium">{item.user}</span> {item.text}
                </div>
                <div className="text-xs text-slate-500">{item.time} ago</div>
              </div>
            </div>
            <button className="text-xs text-indigo-600 hover:underline">
              View
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function TeamTable() {
  const [query, setQuery] = useState("");
  const data = useMemo(
    () =>
      team.filter((t) => t.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <Card
      title="Team members"
      action={
        <input
          placeholder="Search"
          className="rounded-md border px-2 py-1 text-sm"
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
      }
    >
      <div className="overflow-hidden rounded-lg border">
        <table className="min-w-full divide-y divide-slate-200 bg-white">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-slate-500">
                Name
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-slate-500">
                Role
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-slate-500">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {data.map((m) => (
              <tr key={m.id} className="hover:bg-slate-50">
                <td className="px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400" />
                    <div className="text-sm font-medium">{m.name}</div>
                  </div>
                </td>
                <td className="px-3 py-2 text-sm text-slate-600">{m.role}</td>
                <td className="px-3 py-2">
                  <span
                    className={[
                      "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs",
                      m.status === "online"
                        ? "bg-emerald-50 text-emerald-700"
                        : m.status === "idle"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-slate-100 text-slate-700",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "h-1.5 w-1.5 rounded-full",
                        m.status === "online"
                          ? "bg-emerald-500"
                          : m.status === "idle"
                          ? "bg-amber-500"
                          : "bg-slate-400",
                      ].join(" ")}
                    />
                    {m.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function TasksMini() {
  return (
    <Card title="Your Tasks" subtitle="23 Deliveries in progress">
      <div className="space-y-3">
        <div>
          <div className="mb-1 flex items-center justify-between text-sm">
            <span>Design QA</span>
            <span>64%</span>
          </div>
          <Progress value={64} />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between text-sm">
            <span>API Integration</span>
            <span>42%</span>
          </div>
          <Progress value={42} />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between text-sm">
            <span>Unit Testing</span>
            <span>81%</span>
          </div>
          <Progress value={81} />
        </div>
      </div>
    </Card>
  );
}

/* ============== CHARTS ============== */

function AreaTrend() {
  const [range, setRange] = useState<"weekly" | "monthly">("weekly");
  const data = useMemo(
    () => (range === "weekly" ? weeklyLine : monthlyLine),
    [range]
  );

  return (
    <div className="flex h-full flex-col">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-semibold">Delivery Velocity</div>
        <div className="flex gap-1">
          <Button
            variant={range === "weekly" ? "primary" : "ghost"}
            onClick={() => setRange("weekly")}
          >
            Weekly
          </Button>
          <Button
            variant={range === "monthly" ? "primary" : "ghost"}
            onClick={() => setRange("monthly")}
          >
            Monthly
          </Button>
        </div>
      </div>
      <div className="h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ left: 0, right: 0, top: 10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="gradA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />
            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} />
            <ReTooltip cursor={{ stroke: "#94a3b8", strokeDasharray: "3 3" }} />
            <Area
              dataKey="value"
              type="monotone"
              stroke="#4f46e5"
              fill="url(#gradA)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function BarGroups() {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barGroups} barCategoryGap={12}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e2e8f0"
          />
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
          <YAxis stroke="#94a3b8" fontSize={12} />
          <ReTooltip />
          <Legend />
          <Bar
            dataKey="a"
            stackId="stack"
            fill="#4f46e5"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="b"
            stackId="stack"
            fill="#22c55e"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="c"
            stackId="stack"
            fill="#f59e0b"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function PieSummary() {
  const total = pieData.reduce((a, c) => a + c.value, 0);
  return (
    <div className="relative h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <ReTooltip />
          <Pie
            data={pieData}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {pieData.map((d, i) => (
              <Cell key={i} fill={d.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold">{total}%</div>
          <div className="text-xs text-slate-500">Conversion</div>
        </div>
      </div>
    </div>
  );
}

/* ============== LAYOUT ============== */

function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const links = [
    { icon: Home, label: "Dashboard" },
    { icon: BarChart2, label: "Analytics" },
    { icon: Rocket, label: "Deploy" },
    { icon: Settings, label: "Settings" },
  ];
  return (
    <aside className="sticky top-0 hidden h-screen w-[72px] shrink-0 flex-col items-center gap-3 bg-white/80 px-2 py-4 shadow-[0_10px_30px_rgba(16,24,40,0.08)] ring-1 ring-black/5 backdrop-blur supports-[backdrop-filter]:bg-white/60 sm:flex">
      <div className="mb-2 rounded-lg bg-indigo-600 px-2 py-1 text-xs font-bold text-white">
        CM
      </div>
      <nav className="flex flex-col items-center gap-2">
        {links.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={[
              "relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100",
              active === label && "bg-slate-900 text-white hover:bg-slate-900",
            ].join(" ")}
            title={label}
            aria-label={label}
          >
            <Icon size={18} />
          </button>
        ))}
      </nav>
      <div className="mt-auto text-[10px] text-slate-400">&copy; 2025</div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-3 bg-white/70 px-3 py-3 ring-1 ring-black/5 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold">Central Dashboard</h1>
        <div className="hidden items-center gap-2 rounded-lg border bg-white px-2 py-1 text-sm text-slate-500 sm:flex">
          <Search size={16} />
          <input
            placeholder="Search..."
            className="w-60 bg-transparent outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost">
          <Plus size={16} /> New
        </Button>
        <button
          className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100"
          aria-label="notifications"
        >
          <Bell size={18} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-rose-500" />
        </button>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400" />
      </div>
    </header>
  );
}

/* ============== PAGE ============== */
export default function Page() {

  return (
    <div
      className="min-h-screen"
      style={{
        
        background:
          "radial-gradient(1000px 500px at 80% -50%, rgba(79,70,229,.18), transparent), radial-gradient(800px 400px at -30% 120%, rgba(14,165,233,.18), transparent), rgb(245,246,250)",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] gap-4 p-3">
        <Sidebar />
        <main className="flex-1">
          <Topbar />
          <div className="grid grid-cols-12 gap-4 p-3">
            {kpis.map((k) => (
              <div
                key={k.id}
                className="col-span-12 sm:col-span-6 lg:col-span-3"
              >
                <StatCard title={k.title} value={k.value} delta={k.delta} />
              </div>
            ))}

            <div className="col-span-12 lg:col-span-6">
              <Card>
                <AreaTrend />
              </Card>
            </div>

            <div className="col-span-12 lg:col-span-3">
              <Card title="New Pie Chart">
                <PieSummary />
              </Card>
            </div>

            <div className="col-span-12 lg:col-span-3">
              <TasksMini />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Card title="Revenue Growth Cycle">
                <BarGroups />
              </Card>
            </div>

            <div className="col-span-12 lg:col-span-3">
              <ActivityFeed />
            </div>

            <div className="col-span-12 lg:col-span-3">
              <Card title="Sprint Taskboard">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Open Issues</span>
                    <span className="font-medium">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Merged PRs</span>
                    <span className="font-medium">18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Deploy Slot</span>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5">
                      3d
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="col-span-12">
              <TeamTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
