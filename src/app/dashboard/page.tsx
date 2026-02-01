// src/app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Calendar, 
  Scale, 
  Users, 
  DollarSign, 
  Clock, 
  FileText, 
  AlertCircle 
} from "lucide-react"; // ← tiny icons lib, install: npm install lucide-react

// Optional: if you don't want extra package, replace with emoji or heroicons/svg

export const metadata: Metadata = {
  title: "Client Dashboard | Advocate Hafiz Sajid Hussain",
  description: "View your active cases, upcoming hearings, documents, and account status.",
};

type Case = {
  id: string;
  title: string;
  type: string;
  status: "Active" | "Pending" | "Hearing" | "Settled";
  date: string;
  priority?: "High" | "Medium" | "Low";
};

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate auth check (replace with real session / cookie / next-auth later)
  useEffect(() => {
    const timer = setTimeout(() => {
      // In real app: check localStorage, cookies, or API
      const mockLoggedIn = true; // ← change to false to test redirect
      setIsAuthenticated(mockLoggedIn);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-indigo-500 rounded-full border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <AlertCircle className="h-16 w-16 text-red-500 mb-6" />
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Access Denied
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md">
          Please log in to view your client dashboard and case details.
        </p>
        <Link
          href="/login"
          className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  // Mock data – replace with real API fetch later
  const stats = {
    activeCases: 7,
    activeClients: 4, // if multi-client access
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
    <div className="container mx-auto px-6 py-10 md:py-16">
      {/* Welcome Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
          Welcome back, Client
        </h1>
        <p className="mt-2 text-slate-600">
          Here's an overview of your cases and upcoming activities • February 01, 2026
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="glass rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Active Cases</p>
              <p className="text-3xl font-bold text-indigo-700 mt-1">{stats.activeCases}</p>
            </div>
            <Scale className="h-10 w-10 text-indigo-500 opacity-80" />
          </div>
        </div>

        <div className="glass rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Active Clients</p>
              <p className="text-3xl font-bold text-teal-600 mt-1">{stats.activeClients}</p>
            </div>
            <Users className="h-10 w-10 text-teal-500 opacity-80" />
          </div>
        </div>

        <div className="glass rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Billed</p>
              <p className="text-3xl font-bold text-emerald-600 mt-1">{stats.totalRevenue}</p>
            </div>
            <DollarSign className="h-10 w-10 text-emerald-500 opacity-80" />
          </div>
        </div>

        <div className="glass rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Pending Tasks</p>
              <p className="text-3xl font-bold text-amber-600 mt-1">{stats.pendingTasks}</p>
            </div>
            <Clock className="h-10 w-10 text-amber-500 opacity-80" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upcoming Hearings */}
        <div className="glass rounded-2xl p-8 border border-slate-200/50 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Upcoming Hearings</h2>
            <Calendar className="h-6 w-6 text-indigo-600" />
          </div>

          <div className="space-y-5">
            {upcomingHearings.map((hearing) => (
              <div
                key={hearing.id}
                className="flex items-start justify-between p-4 bg-slate-50/70 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors"
              >
                <div>
                  <p className="font-semibold text-slate-800">{hearing.title}</p>
                  <p className="text-sm text-slate-600 mt-1">
                    {hearing.type} • {hearing.date}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    hearing.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : hearing.priority === "Medium"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {hearing.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="#"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              View Full Court Schedule →
            </Link>
          </div>
        </div>

        {/* Recent Activity / Cases */}
        <div className="glass rounded-2xl p-8 border border-slate-200/50 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Recent Cases</h2>
            <FileText className="h-6 w-6 text-indigo-600" />
          </div>

          <div className="space-y-5">
            {recentCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="p-4 bg-slate-50/70 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-slate-800">{caseItem.title}</p>
                    <p className="text-sm text-slate-600 mt-1">
                      {caseItem.type} • {caseItem.date}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                    {caseItem.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="#"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              View All Cases →
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center md:text-left">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { label: "New Case Inquiry", icon: Scale, href: "#" },
            { label: "Upload Document", icon: FileText, href: "#" },
            { label: "Schedule Meeting", icon: Calendar, href: "#" },
            { label: "View Invoices", icon: DollarSign, href: "#" },
          ].map((action, idx) => (
            <Link
              key={idx}
              href={action.href}
              className="glass rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-200/50"
            >
              <action.icon className="h-8 w-8 mx-auto mb-3 text-indigo-600" />
              <p className="font-medium text-slate-800">{action.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}