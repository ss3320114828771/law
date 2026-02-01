// src/app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Scale,
  Users,
  DollarSign,
  Clock,
  FileText,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

type Case = {
  id: string;
  title: string;
  type: string;
  status: "Active" | "Pending" | "Hearing" | "Settled";
  date: string;
  priority?: "High" | "Medium" | "Low";
};

type Stats = {
  activeCases: number;
  activeClients: number;
  totalRevenue: string;
  pendingTasks: number;
};

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ← Replace with real auth later (next-auth, clerk, supabase, etc.)
    const timer = setTimeout(() => {
      const mockLoggedIn = true; // change to false to test logged-out view
      setIsAuthenticated(mockLoggedIn);
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (!isAuthenticated) {
    return <UnauthorizedState />;
  }

  // Mock data – replace with API fetch in real app
  const stats: Stats = {
    activeCases: 7,
    activeClients: 4,
    totalRevenue: "PKR 1,245,800",
    pendingTasks: 3,
  };

  const upcomingHearings: Case[] = [
    { id: "C-042", title: "Property Dispute – Gulberg Plot", type: "Civil", status: "Hearing", date: "15 Feb 2026", priority: "High" },
    { id: "C-119", title: "Family Maintenance Petition", type: "Family", status: "Hearing", date: "22 Feb 2026", priority: "Medium" },
    { id: "C-087", title: "Contract Breach Recovery", type: "Commercial", status: "Pending", date: "28 Feb 2026" },
  ];

  const recentCases: Case[] = [
    { id: "C-205", title: "Divorce & Khula Proceedings", type: "Family", status: "Active", date: "Started 10 Jan 2026" },
    { id: "C-198", title: "Criminal Bail Application", type: "Criminal", status: "Active", date: "Started 05 Jan 2026" },
  ];

  return (
    <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-10 lg:py-16 min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Welcome back
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Your cases & upcoming court activity •{" "}
          {new Date().toLocaleDateString("en-PK", { dateStyle: "medium" })}
        </p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
        <StatCard title="Active Cases" value={stats.activeCases} icon={Scale} color="indigo" />
        <StatCard title="Active Clients" value={stats.activeClients} icon={Users} color="teal" />
        <StatCard title="Total Billed" value={stats.totalRevenue} icon={DollarSign} color="emerald" />
        <StatCard title="Pending Tasks" value={stats.pendingTasks} icon={Clock} color="amber" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <DashboardCard title="Upcoming Hearings" icon={Calendar}>
          <div className="space-y-4">
            {upcomingHearings.length === 0 ? (
              <p className="text-center text-slate-500 py-8">No upcoming hearings</p>
            ) : (
              upcomingHearings.map((item) => (
                <CaseItem key={item.id} {...item} isHearing />
              ))
            )}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/dashboard/hearings"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
            >
              View full schedule <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </DashboardCard>

        <DashboardCard title="Recent Cases" icon={FileText}>
          <div className="space-y-4">
            {recentCases.length === 0 ? (
              <p className="text-center text-slate-500 py-8">No recent cases</p>
            ) : (
              recentCases.map((item) => <CaseItem key={item.id} {...item} />)
            )}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/dashboard/cases"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
            >
              View all cases <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </DashboardCard>
      </div>

      {/* Quick Actions */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center lg:text-left">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {[
            { label: "New Case Inquiry", icon: Scale, href: "/dashboard/new-case" },
            { label: "Upload Document", icon: FileText, href: "/dashboard/documents/upload" },
            { label: "Schedule Meeting", icon: Calendar, href: "/dashboard/meetings/new" },
            { label: "View Invoices", icon: DollarSign, href: "/dashboard/billing" },
          ].map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="group relative flex flex-col items-center justify-center p-6 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-2xl hover:border-indigo-400 dark:hover:border-indigo-500 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <action.icon className="h-9 w-9 text-indigo-600 dark:text-indigo-400 mb-3 transition-transform group-hover:scale-110" />
              <span className="font-medium text-slate-800 dark:text-slate-200 text-center">
                {action.label}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ── Reusable Components ── */

function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string;
  value: string | number;
  icon: any;
  color: "indigo" | "teal" | "emerald" | "amber";
}) {
  const colorMap = {
    indigo: "text-indigo-600 dark:text-indigo-400",
    teal: "text-teal-600 dark:text-teal-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
    amber: "text-amber-600 dark:text-amber-400",
  };

  return (
    <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
          <p className="text-2xl sm:text-3xl font-bold mt-1.5 text-slate-900 dark:text-slate-50">
            {value}
          </p>
        </div>
        <Icon className={`h-10 w-10 ${colorMap[color]} opacity-90`} />
      </div>
    </div>
  );
}

function DashboardCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: any;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
        <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
      </div>
      {children}
    </div>
  );
}

function CaseItem({ title, type, date, status, priority, isHearing = false }: Case & { isHearing?: boolean }) {
  const statusColor = {
    Active: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    Hearing: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    Settled: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  }[status];

  const priorityColor = {
    High: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    Medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    Low: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  };

  return (
    <div className="p-4 bg-slate-50/70 dark:bg-slate-800/30 rounded-xl border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {type} • {date}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
            {status}
          </span>
          {priority && isHearing && (
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColor[priority]}`}>
              {priority}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="h-10 w-64 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="h-32 bg-slate-200 dark:bg-slate-700 rounded-2xl animate-pulse" />
          ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="h-80 bg-slate-200 dark:bg-slate-700 rounded-2xl animate-pulse" />
          ))}
      </div>
    </div>
  );
}

function UnauthorizedState() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <AlertCircle className="h-20 w-20 text-red-500 mb-8 animate-pulse" />
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-5">
        Access Denied
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-md">
        Please sign in to view your client dashboard, cases, hearings and documents.
      </p>
      <Link
        href="/login"
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
      >
        Sign In to Dashboard
      </Link>
    </div>
  );
}