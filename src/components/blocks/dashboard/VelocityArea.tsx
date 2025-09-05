// src/components/charts/VelocityArea.tsx
"use client";

import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", v: 42 },
  { name: "Tue", v: 38 },
  { name: "Wed", v: 48 },
  { name: "Thu", v: 46 },
  { name: "Fri", v: 52 },
  { name: "Sat", v: 50 },
  { name: "Sun", v: 62 },
];

// lock the y-axis max so the chart doesn't "jump" when line shifts
const yMax = Math.max(...data.map((d) => d.v));

export default function VelocityArea() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 6, right: 12, left: 2, bottom: 12 }}
      >
        <defs>
          <linearGradient id="c1" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="#51DDF7"
              stopOpacity={0.45}
            />
            <stop
              offset="95%"
              stopColor="#51def725"
              stopOpacity={0.05}
            />
          </linearGradient>
        </defs>

        <CartesianGrid stroke="#eef2ff" vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          dy={8}
          stroke="#94a3b8"
          tickMargin={6}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          dx={-6}
          stroke="#94a3b8"
          domain={[0, yMax + 10]}
        />
        <Tooltip cursor={{ stroke: "#818cf8", strokeWidth: 2 }} />

        <Area
          dataKey="v"
          type="monotone"
          stroke="#51DDF7"
          strokeWidth={3}
          fill="url(#c1)"
          // 👇 the hover animation magic
          className="transition-transform duration-200 ease-out group-hover:-translate-y-1 [transform-box:fill-box]"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}