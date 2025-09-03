// src/components/charts/PieDonut.tsx
"use client";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "New", value: 63, color: "#6366f1" },
  { name: "Returning", value: 25, color: "#22d3ee" },
  { name: "Churn", value: 12, color: "#94a3b8" },
];

export default function PieDonut() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={55}
          outerRadius={85}
          paddingAngle={2}
          cornerRadius={8}
        >
          {data.map((d, idx) => (
            <Cell key={idx} fill={d.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={24}/>
      </PieChart>
    </ResponsiveContainer>
  );
}