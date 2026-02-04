"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState } from "react";

// Dummy Dashboard Data

const kpiData = {
  activeCandidates: 124,
  interviewsScheduled: 18,
  offersMade: 6,
  hiredThisMonth: 3,
};

const applicationTrends = [
  { month: "Jan", applications: 40 },
  { month: "Feb", applications: 55 },
  { month: "Mar", applications: 72 },
  { month: "Apr", applications: 61 },
  { month: "May", applications: 90 },
  { month: "Jun", applications: 105 },
];

const candidates = [
  {
    name: "Sarah Johnson",
    role: "Frontend Engineer",
    stage: "Interviewed",
    date: "2026-01-15",
  },
  {
    name: "Michael Chen",
    role: "Backend Engineer",
    stage: "Offered",
    date: "2026-01-18",
  },
  {
    name: "Emily Davis",
    role: "Product Designer",
    stage: "Applied",
    date: "2026-01-20",
  },
  {
    name: "James Wilson",
    role: "DevOps Engineer",
    stage: "Hired",
    date: "2026-01-22",
  },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidates = candidates.filter((candidate) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 p-8 space-y-12 relative overflow-hidden">

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

         {/*Header Section*/}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Recruitment Overview • Clever Hiring Pipeline
            </p>
          </div>

          {/* Search */}
          <div className="w-full sm:w-80">
            <Input
                placeholder="Search candidates, roles, or stages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow-sm focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

         {/*KPI Cards*/}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard title="Active Candidates" value={kpiData.activeCandidates} />
          <KpiCard
              title="Interviews Scheduled"
              value={kpiData.interviewsScheduled}
          />
          <KpiCard title="Offers Made" value={kpiData.offersMade} />
          <KpiCard title="Hired This Month" value={kpiData.hiredThisMonth} />
        </div>

         {/*Applications Trend Chart*/}
        <Card className="rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-md overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Applications Trend
            </CardTitle>
          </CardHeader>

          <CardContent className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={applicationTrends}>
                {/* Remove harsh grid */}
                <CartesianGrid stroke="transparent" />

                <XAxis dataKey="month" />
                <YAxis />

                <defs>
                  <linearGradient id="appsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <Tooltip
                    contentStyle={{
                      background: "rgba(15, 23, 42, 0.9)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "14px",
                      color: "white",
                      padding: "12px",
                    }}
                />

                <Area
                    type="monotone"
                    dataKey="applications"
                    stroke="#6366f1"
                    fill="url(#appsGradient)"
                    strokeWidth={3}
                />

                <Line
                    type="monotone"
                    dataKey="applications"
                    stroke="#7c3aed"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 7 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

         {/*Candidates Table*/}
        <Card className="rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-md overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Recent Candidates
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="rounded-2xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Stage</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {filteredCandidates.length > 0 ? (
                      filteredCandidates.map((candidate, index) => (
                          <TableRow
                              key={index}
                              className="hover:bg-white/40 dark:hover:bg-white/10 transition"
                          >
                            <TableCell className="font-medium">
                              {candidate.name}
                            </TableCell>

                            <TableCell>{candidate.role}</TableCell>

                            <TableCell>
                              <StageBadge stage={candidate.stage} />
                            </TableCell>

                            <TableCell>{candidate.date}</TableCell>
                          </TableRow>
                      ))
                  ) : (
                      <TableRow>
                        <TableCell
                            colSpan={4}
                            className="text-center py-6 text-muted-foreground"
                        >
                          No candidates found.
                        </TableCell>
                      </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}

function KpiCard({ title, value }) {
  return (
      <Card className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-300">
        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-70" />

        <CardHeader className="pb-2 relative z-10">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10">
          <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
            {value}
          </div>
          <p className="text-sm text-emerald-500 mt-1">+12% from last month</p>
        </CardContent>
      </Card>
  );
}

function StageBadge({ stage }) {
  const styles =
      stage === "Hired"
          ? "bg-emerald-500/15 text-emerald-600"
          : stage === "Offered"
              ? "bg-yellow-500/15 text-yellow-600"
              : stage === "Interviewed"
                  ? "bg-blue-500/15 text-blue-600"
                  : "bg-purple-500/15 text-purple-600";

  return (
      <Badge className={`rounded-full px-3 py-1 text-xs font-semibold ${styles}`}>
        {stage}
      </Badge>
  );
}
