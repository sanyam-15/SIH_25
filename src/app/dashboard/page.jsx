"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/app/components/dashboard/Cardpiechart";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function TourismDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const randomNumber = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const reviews = {
      accommodation: [
        { name: "Positive", value: randomNumber(200, 1000) },
        { name: "Negative", value: randomNumber(50, 400) },
      ],
      activities: [
        { name: "Positive", value: randomNumber(200, 1000) },
        { name: "Negative", value: randomNumber(50, 400) },
      ],
      safety: [
        { name: "Positive", value: randomNumber(200, 1000) },
        { name: "Negative", value: randomNumber(50, 400) },
      ],
      cleanliness: [
        { name: "Positive", value: randomNumber(200, 1000) },
        { name: "Negative", value: randomNumber(50, 400) },
      ],
      timeline: Array.from({ length: 7 }, (_, i) => ({
        day: `Day ${i + 1}`,
        reviews: randomNumber(100, 500),
        visitors: randomNumber(1000, 3000),
      })),
      stats: {
        totalSignups: randomNumber(5000, 15000),
        onlineUsers: randomNumber(100, 800),
        totalVisitors: randomNumber(20000, 80000),
        todaysBookings: randomNumber(50, 300),
      },
    };

    setData(reviews);
  }, []);

  if (!data) return <p className="p-4">Loading dashboard...</p>;

  const COLORS = ["#4CAF50", "#F44336"];

  return (
    <div className="p-6 space-y-6">

      {/* Page Heading */}
    <h1 className="text-4xl font-extrabold text-center text-gray-800 tracking-wide mb-6">
      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Feedback Dashboard Analytics
      </span>
    </h1>
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Total Signups</h3>
              <p className="text-3xl font-bold mt-2">
                {data?.stats?.totalSignups ?? "—"}
              </p>
            </CardContent>
          </Card>

        <Card className="shadow-lg bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold">Online Users</h3>
            <p className="text-3xl font-bold mt-2">{data.stats.onlineUsers}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold">Total Visitors</h3>
            <p className="text-3xl font-bold mt-2">{data.stats.totalVisitors}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-gradient-to-r from-pink-500 to-pink-600 text-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold">Bookings Today</h3>
            <p className="text-3xl font-bold mt-2">{data.stats.todaysBookings}</p>
          </CardContent>
        </Card>
      </div>

      {/* Review Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Accommodation Pie */}
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold mb-4">Accommodation Reviews</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data.accommodation}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label
                >
                  {data.accommodation.map((entry, index) => (
                    <Cell
                      key={`cell-accom-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Activities Pie */}
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold mb-4">
              Activities & Attractions Reviews
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data.activities}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label
                >
                  {data.activities.map((entry, index) => (
                    <Cell
                      key={`cell-act-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Safety Pie */}
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold mb-4">
              Safety & Security Reviews
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data.safety}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label
                >
                  {data.safety.map((entry, index) => (
                    <Cell
                      key={`cell-safe-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Cleanliness Pie */}
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold mb-4">
              Cleanliness & Hygiene Reviews
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data.cleanliness}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label
                >
                  {data.cleanliness.map((entry, index) => (
                    <Cell
                      key={`cell-clean-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Timeline & Visitors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Reviews Trend */}
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold mb-4">Review Trends Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.timeline}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="reviews"
                  stroke="#2196F3"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Visitors Trend */}
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold mb-4">Visitors Per Day</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.timeline}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="visitors" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
