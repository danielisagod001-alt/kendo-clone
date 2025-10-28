"use client";

import { useContext } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Chart() {
  const { theme } = useContext(ThemeContext);

  const data = [
    { name: "Jan", sales: 4000, revenue: 2400 },
    { name: "Feb", sales: 3000, revenue: 1398 },
    { name: "Mar", sales: 5000, revenue: 9800 },
    { name: "Apr", sales: 4500, revenue: 3908 },
    { name: "May", sales: 6000, revenue: 4800 },
    { name: "Jun", sales: 5500, revenue: 3800 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Sales Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={theme === "light" ? "#e0e0e0" : "#4a5568"} />
          <XAxis dataKey="name" stroke={theme === "light" ? "#374151" : "#d1d5db"} />
          <YAxis stroke={theme === "light" ? "#374151" : "#d1d5db"} />
          <Tooltip
            contentStyle={{
              backgroundColor: theme === "light" ? "#ffffff" : "#1f2937",
              borderColor: theme === "light" ? "#e5e7eb" : "#4b5563",
            }}
          />
          <Legend />
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Line type="monotone" dataKey="sales" stroke="#8884d8" fillOpacity={1} fill="url(#colorSales)" />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorRevenue)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
