// src/components/charts/RevenueGroupBars.tsx
"use client";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", forecast: 12, achieved: 9 },
  { name: "Tue", forecast: 14, achieved: 12 },
  { name: "Wed", forecast: 13, achieved: 10 },
  { name: "Thu", forecast: 16, achieved: 13 },
  { name: "Fri", forecast: 18, achieved: 16 },
  { name: "Sat", forecast: 17, achieved: 15 },
  { name: "Sun", forecast: 19, achieved: 18 },
];

export default function RevenueGroupBars() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 0, right: 8, left: -6, bottom: 12 }} barCategoryGap={18}>
        <CartesianGrid stroke="#eef2ff" vertical={false}/>
        <XAxis dataKey="name" tickLine={false} axisLine={false} dy={8} stroke="#94a3b8" tickMargin={6}/>
        <YAxis tickLine={false} axisLine={false} dx={-8} stroke="#94a3b8" domain={[0, 'dataMax + 4']} />
        <Tooltip />
        <Bar dataKey="achieved" fill="#60a5fa" radius={[6, 6, 0, 0]} />
        <Bar dataKey="forecast" fill="#a78bfa" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}