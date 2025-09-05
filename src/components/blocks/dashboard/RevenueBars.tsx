// src/components/charts/RevenueGroupBars.tsx
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const baseData = [
  { name: "Mon", forecast: 12, achieved: 9 },
  { name: "Tue", forecast: 14, achieved: 12 },
  { name: "Wed", forecast: 13, achieved: 10 },
  { name: "Thu", forecast: 16, achieved: 13 },
  { name: "Fri", forecast: 18, achieved: 16 },
  { name: "Sat", forecast: 17, achieved: 15 },
  { name: "Sun", forecast: 19, achieved: 18 },
];

const yMax = Math.max(...baseData.map((d) => Math.max(d.forecast, d.achieved)));

interface RevenueGroupBarsProps {
  hovered?: boolean;
}

export default function RevenueGroupBars({ hovered = false }: RevenueGroupBarsProps) {
  // Increase values if hovered
  const data = baseData.map((d) => ({
    ...d,
    forecast: hovered ? d.forecast + 2 : d.forecast,
    achieved: hovered ? d.achieved + 2 : d.achieved,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 0, right: 8, left: -6, bottom: 12 }}
        barCategoryGap={18}
      >
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
          dx={-8}
          stroke="#94a3b8"
          domain={[0, yMax + 6]} // allow headroom for hover growth
        />
        <Tooltip />

        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.9} />
          </linearGradient>
        </defs>

        {/* Animate growth with a transition on rects */}
        <Bar
          dataKey="achieved"
          fill="url(#barGradient)"
          radius={[2, 2, 0, 0]}
          className="transition-all duration-300 ease-out"
        />
        <Bar
          dataKey="forecast"
          fill="#412BE0"
          radius={[2, 2, 0, 0]}
          className="transition-all duration-300 ease-out"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}