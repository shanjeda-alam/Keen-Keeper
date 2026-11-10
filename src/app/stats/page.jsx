"use client";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTimeline } from "../context/TimelineContext";


const COLORS = {
  Text: "#7c3aed",
  Call: "#244d3f",
  Video: "#38a169",
};

const StatsPage = () => {
  const { entries } = useTimeline();

  const data = ["Text", "Call", "Video"].map((name) => ({
    name,
    value: entries.filter((e) => e.type === name.toLowerCase()).length,
  }));

  const hasData = data.some((d) => d.value > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Friendship Analytics</h1>

      <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
        <h2 className="text-sm font-medium text-[#244d3f]">
          By Interaction Type
        </h2>

        {hasData ? (
          <div className="h-80 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={65}
                  outerRadius={90}
                  paddingAngle={5}
                  cornerRadius={8}
                  stroke="none"
                >
                  {data.map((item) => (
                    <Cell key={item.name} fill={COLORS[item.name]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" iconSize={8} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="text-center text-gray-400 py-16">
            No interactions yet. Check in with a friend to see your chart.
          </p>
        )}
      </div>
    </div>
  );
};

export default StatsPage;