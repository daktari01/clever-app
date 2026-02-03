"use client";  // ← Make this a Client Component for search state + Recharts

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import { kpiData, monthlyApplications, dummyCandidates } from "@/lib/dummy-data";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidates = dummyCandidates.filter((candidate) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.stage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="space-y-8">
        {/* Header + Search */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back to Clever • Recruitment Overview</p>
          </div>
          <div className="w-full sm:w-72">
            <Input
                placeholder="Search candidates or roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
            />
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Candidates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpiData.activeCandidates}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Open Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpiData.openRoles}</div>
              <p className="text-xs text-muted-foreground">+4 new this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Interviews This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpiData.interviewsThisMonth}</div>
              <p className="text-xs text-muted-foreground">+8% vs last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg Time to Hire</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpiData.avgTimeToHire}</div>
              <p className="text-xs text-muted-foreground">-2 days improvement</p>
            </CardContent>
          </Card>
        </div>

        {/* Applications Trend Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Applications Trend</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyApplications}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="applications" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Candidates Table with Search */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Candidates ({filteredCandidates.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Stage</TableHead>
                  <TableHead>Applied</TableHead>
                  <TableHead>Source</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCandidates.map((candidate) => (
                    <TableRow key={candidate.id}>
                      <TableCell className="font-medium">{candidate.name}</TableCell>
                      <TableCell>{candidate.role}</TableCell>
                      <TableCell>
                        <Badge variant={
                          candidate.stage === "Hired" ? "default" :
                              candidate.stage === "Offered" ? "secondary" :
                                  candidate.stage === "Interviewed" ? "outline" : "secondary"
                        }>
                          {candidate.stage}
                        </Badge>
                      </TableCell>
                      <TableCell>{candidate.applied}</TableCell>
                      <TableCell>{candidate.source}</TableCell>
                    </TableRow>
                ))}
                {filteredCandidates.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                        No candidates found matching "{searchTerm}"
                      </TableCell>
                    </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
  );
}