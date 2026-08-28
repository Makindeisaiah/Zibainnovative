import React from 'react';
import {
  Ticket,
  Search,
  Bell,
  Calendar,
  DollarSign,
  Users,
  CheckCircle2,
  QrCode,
  Sparkles,
  TrendingUp,
  LayoutDashboard,
  BarChart3,
  Settings,
  CreditCard,
  Building2,
  Clock,
  ShieldCheck,
  Radio,
  ExternalLink,
  ChevronRight,
  Sun,
  UserCheck,
  AlertTriangle,
  FileText,
  Lock,
} from 'lucide-react';

/**
 * 1. Ticketa Main Hero Overview Mockup (Flytimefest Overview Dashboard)
 * As seen in IMG_3059.jpeg
 */
export const TicketaHeroDashboard: React.FC = () => {
  return (
    <div className="w-full bg-[#FAFBFD] rounded-2xl md:rounded-3xl border border-[#E2E8F0] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden text-[#0E1322] font-sans">
      {/* Top Header Bar */}
      <div className="bg-white px-4 sm:px-6 py-3.5 border-b border-[#EEF2F6] flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#00D09C] flex items-center justify-center text-white shadow-sm font-bold text-sm">
            <Ticket className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-[#0E1322] tracking-tight text-base sm:text-lg">
            TICKETA
          </span>
        </div>

        {/* Search */}
        <div className="hidden sm:flex items-center bg-[#F4F6F8] rounded-full px-3.5 py-1.5 w-64 md:w-80 border border-transparent focus-within:border-[#00D09C] focus-within:bg-white transition-all">
          <Search className="w-3.5 h-3.5 text-[#94A3B8] mr-2 shrink-0" />
          <input
            type="text"
            readOnly
            value="Search events, orders, attendees..."
            className="bg-transparent text-xs text-[#64748B] outline-none w-full cursor-default"
          />
        </div>

        {/* User Profile / Notifications */}
        <div className="flex items-center gap-3">
          <div className="relative p-1.5 text-[#64748B] hover:text-[#0E1322] rounded-full bg-[#F4F6F8]">
            <Bell className="w-4 h-4" />
            <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-[#FF3B30] border-2 border-white" />
          </div>
          <div className="flex items-center gap-2 pl-2 border-l border-[#EEF2F6]">
            <div className="w-8 h-8 rounded-full bg-[#0E1322] text-white flex items-center justify-center text-[10px] font-bold tracking-wider uppercase border border-slate-700">
              FLY
            </div>
            <div className="hidden md:block text-left">
              <div className="text-xs font-bold text-[#0E1322] leading-tight">Flytimefest</div>
              <div className="text-[10px] text-[#64748B]">Organizer Pro</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Inner Layout */}
      <div className="grid grid-cols-12 min-h-[460px]">
        {/* Left Sidebar */}
        <div className="hidden md:flex col-span-3 lg:col-span-2 bg-white border-r border-[#EEF2F6] p-4 flex-col justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#00D09C] text-white font-semibold text-xs shadow-sm">
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#64748B] hover:bg-[#F8FAFC] font-medium text-xs">
              <Calendar className="w-4 h-4" />
              <span>Events</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#64748B] hover:bg-[#F8FAFC] font-medium text-xs">
              <BarChart3 className="w-4 h-4" />
              <span>Analytics</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#64748B] hover:bg-[#F8FAFC] font-medium text-xs">
              <Ticket className="w-4 h-4" />
              <span>Ticket Sales</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#64748B] hover:bg-[#F8FAFC] font-medium text-xs">
              <UserCheck className="w-4 h-4" />
              <span>Check-Ins</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#64748B] hover:bg-[#F8FAFC] font-medium text-xs">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </div>
          </div>

          <div className="p-3 bg-[#F0FDF9] rounded-xl border border-[#CCFBF1]">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#0D9488] uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-[#00D09C]" /> Pro License
            </div>
            <p className="text-[11px] text-[#134E4A] font-medium">All 8 gates active with real-time sync</p>
          </div>
        </div>

        {/* Center/Right Dashboard Body */}
        <div className="col-span-12 md:col-span-9 lg:col-span-10 p-4 sm:p-6 lg:p-7 space-y-6">
          {/* Welcome Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0E1322] tracking-tight">
                Welcome, Flytimefest
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B]">Here are your current event stats</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6FAF4] text-[#00A87E] text-xs font-semibold self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-[#00D09C] animate-pulse" />
              Live Syncing Active
            </div>
          </div>

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Total Revenue */}
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#EEF2F6] shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6FAF4] text-[#00D09C] flex items-center justify-center shrink-0">
                <DollarSign className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-medium text-[#64748B] truncate">Total Revenue</div>
                <div className="text-sm sm:text-base font-extrabold text-[#0E1322] truncate">
                  ₦ 8,524,547,900
                </div>
              </div>
            </div>

            {/* Total Ticket Sold */}
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#EEF2F6] shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6FAF4] text-[#00D09C] flex items-center justify-center shrink-0">
                <Ticket className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-medium text-[#64748B] truncate">Total Ticket Sold</div>
                <div className="text-sm sm:text-base font-extrabold text-[#0E1322] truncate">
                  45,425 <span className="text-[10px] text-[#94A3B8] font-normal">/ 75,000</span>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#EEF2F6] shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6FAF4] text-[#00D09C] flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-medium text-[#64748B] truncate">Upcoming Events</div>
                <div className="text-sm sm:text-base font-extrabold text-[#0E1322]">3</div>
              </div>
            </div>

            {/* Total Check-Ins */}
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#EEF2F6] shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6FAF4] text-[#00D09C] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-medium text-[#64748B] truncate">Total Check-Ins</div>
                <div className="text-sm sm:text-base font-extrabold text-[#0E1322] truncate">
                  22,345 <span className="text-[10px] text-[#94A3B8] font-normal">/ 75,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Performance Chart Container */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EEF2F6] shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9] mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#00D09C]" />
                <span className="text-sm font-bold text-[#0E1322]">Revenue Performance</span>
              </div>
              <div className="inline-flex rounded-lg bg-[#F1F5F9] p-0.5 text-[11px] font-semibold text-[#64748B]">
                <span className="px-2.5 py-1 rounded-md bg-[#FBBF24] text-white shadow-xs">Daily</span>
                <span className="px-2.5 py-1 rounded-md hover:text-[#0E1322]">Weekly</span>
                <span className="px-2.5 py-1 rounded-md hover:text-[#0E1322]">Monthly</span>
              </div>
            </div>

            {/* Simulated Chart Curve with SVG */}
            <div className="relative w-full h-36 sm:h-44">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 700 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00D09C" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#00D09C" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Horizontal Grid lines */}
                <line x1="0" y1="20" x2="700" y2="20" stroke="#F1F5F9" strokeDasharray="3 3" />
                <line x1="0" y1="60" x2="700" y2="60" stroke="#F1F5F9" strokeDasharray="3 3" />
                <line x1="0" y1="100" x2="700" y2="100" stroke="#F1F5F9" strokeDasharray="3 3" />
                <line x1="0" y1="140" x2="700" y2="140" stroke="#F1F5F9" />

                {/* Area and Line Curve */}
                <path
                  d="M 0 130 Q 70 120, 120 70 T 250 40 T 380 40 T 480 110 T 580 40 T 700 45 L 700 150 L 0 150 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M 0 130 Q 70 120, 120 70 T 250 40 T 380 40 T 480 110 T 580 40 T 700 45"
                  fill="none"
                  stroke="#00D09C"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Data Points */}
                <circle cx="120" cy="70" r="4" fill="#00D09C" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="250" cy="40" r="4" fill="#00D09C" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="380" cy="40" r="4" fill="#00D09C" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="480" cy="110" r="4" fill="#00D09C" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="580" cy="40" r="4" fill="#00D09C" stroke="#FFFFFF" strokeWidth="2" />
              </svg>

              {/* Dates Labels */}
              <div className="flex justify-between text-[10px] text-[#94A3B8] mt-2 font-medium">
                <span>Apr 12</span>
                <span>Apr 13</span>
                <span>Apr 14</span>
                <span>Apr 15</span>
                <span>Apr 16</span>
                <span>Apr 17</span>
                <span>Apr 18</span>
                <span>Apr 19</span>
                <span>Apr 20</span>
              </div>
            </div>
          </div>

          {/* Upcoming Events List */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EEF2F6] shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2">
              <span className="text-sm font-bold text-[#0E1322]">Upcoming Events</span>
              <span className="text-xs font-semibold text-[#00D09C] hover:underline cursor-pointer flex items-center gap-0.5">
                More <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Event Item 1 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-[#EEF2F6] gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-rose-700 flex items-center justify-center text-white font-black text-xs shrink-0 shadow-xs">
                  DAV
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0E1322]">Davido Live In Lagos</div>
                  <div className="text-[11px] text-[#64748B]">Dec 24, 2025 • Eko Convention Center, Lagos</div>
                </div>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button type="button" className="px-3 py-1.5 rounded-lg bg-[#00D09C] hover:bg-[#00B788] text-white text-xs font-semibold transition-colors">
                  Manage event
                </button>
                <button type="button" className="px-3 py-1.5 rounded-lg bg-[#E6FAF4] text-[#00A87E] text-xs font-semibold hover:bg-[#D0F5EB] transition-colors">
                  View sales
                </button>
              </div>
            </div>

            {/* Event Item 2 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-[#EEF2F6] gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-800 flex items-center justify-center text-white font-black text-xs shrink-0 shadow-xs">
                  BUR
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0E1322]">Burna Boy Live In Lagos</div>
                  <div className="text-[11px] text-[#64748B]">Dec 27, 2025 • Balmoral Convention Center, VI</div>
                </div>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button type="button" className="px-3 py-1.5 rounded-lg bg-[#00D09C] hover:bg-[#00B788] text-white text-xs font-semibold transition-colors">
                  Manage event
                </button>
                <button type="button" className="px-3 py-1.5 rounded-lg bg-[#E6FAF4] text-[#00A87E] text-xs font-semibold hover:bg-[#D0F5EB] transition-colors">
                  View sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 2. Organizer Events Dashboard Screenshot
 * As seen in IMG_3063.jpeg
 */
export const TicketaEventsDashboard: React.FC = () => {
  return (
    <div className="w-full bg-[#FAFBFD] rounded-2xl md:rounded-3xl border border-[#E2E8F0] shadow-[0_16px_40px_rgba(0,0,0,0.06)] overflow-hidden text-[#0E1322] font-sans">
      {/* Top Header */}
      <div className="bg-white px-5 py-3.5 border-b border-[#EEF2F6] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#00D09C] flex items-center justify-center text-white font-bold text-sm">
            <Ticket className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-[#0E1322] tracking-tight text-base sm:text-lg">TICKETA</span>
        </div>
        <div className="hidden sm:flex items-center bg-[#F4F6F8] rounded-full px-3.5 py-1.5 w-72">
          <Search className="w-3.5 h-3.5 text-[#94A3B8] mr-2" />
          <span className="text-xs text-[#94A3B8]">Search events...</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#64748B]">
            <Bell className="w-3.5 h-3.5" />
          </div>
          <div className="w-8 h-8 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center">
            FLY
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 min-h-[500px]">
        {/* Sidebar */}
        <div className="hidden lg:flex col-span-2 bg-white border-r border-[#EEF2F6] p-4 flex-col space-y-1">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-[#64748B] text-xs font-medium">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#00D09C] text-white text-xs font-semibold shadow-xs">
            <Calendar className="w-4 h-4" /> Events
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-[#64748B] text-xs font-medium">
            <BarChart3 className="w-4 h-4" /> Analytics
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-[#64748B] text-xs font-medium">
            <Ticket className="w-4 h-4" /> Ticket Sales
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-[#64748B] text-xs font-medium">
            <UserCheck className="w-4 h-4" /> Check-Ins
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-[#64748B] text-xs font-medium">
            <Settings className="w-4 h-4" /> Settings
          </div>
        </div>

        {/* Content Area */}
        <div className="col-span-12 lg:col-span-10 p-5 sm:p-7 space-y-6">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-[#0E1322]">Events</h4>
              <p className="text-xs text-[#64748B]">Here are your event seats</p>
            </div>
            <button type="button" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00D09C] hover:bg-[#00B788] text-white text-xs font-bold shadow-sm transition-colors self-start sm:self-auto">
              + Create New Event
            </button>
          </div>

          {/* 4 Summary Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white p-3.5 rounded-2xl border border-[#EEF2F6] shadow-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E6FAF4] text-[#00D09C] flex items-center justify-center shrink-0">
                <Ticket className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-[#64748B]">Total Event</div>
                <div className="text-sm sm:text-base font-extrabold text-[#0E1322]">12</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-[#EEF2F6] shadow-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E6FAF4] text-[#00D09C] flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-[#64748B]">Active Events</div>
                <div className="text-sm sm:text-base font-extrabold text-[#0E1322]">8</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-[#EEF2F6] shadow-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E6FAF4] text-[#00D09C] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-[#64748B]">Total Ticket Sold</div>
                <div className="text-sm sm:text-base font-extrabold text-[#0E1322]">65,892</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-[#EEF2F6] shadow-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E6FAF4] text-[#00D09C] flex items-center justify-center shrink-0">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-[#64748B]">Net Revenue</div>
                <div className="text-sm sm:text-base font-extrabold text-[#0E1322]">₦3,134,963,500</div>
              </div>
            </div>
          </div>

          {/* Search bar inside */}
          <div className="bg-[#F1F5F9] rounded-xl px-3.5 py-2 flex items-center gap-2">
            <Search className="w-4 h-4 text-[#94A3B8]" />
            <span className="text-xs text-[#64748B]">Search events</span>
          </div>

          {/* Events List Cards */}
          <div className="space-y-3">
            {/* Event 1: Davido */}
            <div className="bg-white rounded-2xl border border-[#EEF2F6] p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-16 rounded-xl bg-[#1E293B] text-white p-1 text-center flex flex-col justify-between shrink-0 shadow-xs border border-slate-700">
                  <span className="text-[7px] text-[#00D09C] font-bold">5IVE ALIVE</span>
                  <span className="text-[9px] font-black leading-tight">DAVIDO</span>
                  <span className="text-[6px] text-slate-400">2026</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-[#0E1322]">Davido Live in Lagos</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0369A1] font-semibold">
                      Upcoming
                    </span>
                  </div>
                  <div className="text-xs text-[#64748B] mt-0.5">Eko Convention Center, VI • Thu 25, Dec - 19:00 PM</div>
                  {/* Progress bar */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-36 h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                      <div className="h-full bg-[#00D09C] rounded-full w-[83%]" />
                    </div>
                    <span className="text-[11px] font-bold text-[#0E1322]">(83%)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-5 self-end md:self-auto">
                <div className="text-right">
                  <div className="text-xs font-bold text-[#0E1322]">20,000</div>
                  <div className="text-[10px] text-[#94A3B8]">Tickets</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#0E1322]">16,692</div>
                  <div className="text-[10px] text-[#94A3B8]">Check-ins</div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-[#E6FAF4] text-[#00A87E] text-xs font-bold">
                  ⚡ Selling Fast
                </span>
                <div className="text-sm font-black text-[#00D09C]">₦2,329,909,900</div>
                <button type="button" className="px-3 py-1.5 rounded-xl bg-[#00D09C] text-white text-xs font-semibold">
                  Revenue
                </button>
              </div>
            </div>

            {/* Event 2: Asake */}
            <div className="bg-white rounded-2xl border border-[#EEF2F6] p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-16 rounded-xl bg-[#FFFBEB] text-[#92400E] p-1 text-center flex flex-col justify-between shrink-0 border border-amber-200">
                  <span className="text-[7px] font-bold text-amber-700">LUNGU BOY</span>
                  <span className="text-[9px] font-black leading-tight">ASAKE</span>
                  <span className="text-[6px] text-amber-600">TOUR</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-[#0E1322]">Asake Live in Lagos</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0369A1] font-semibold">
                      Upcoming
                    </span>
                  </div>
                  <div className="text-xs text-[#64748B] mt-0.5">Eko Convention Center, VI • Mon 29, Dec - 19:00 PM</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-36 h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                      <div className="h-full bg-[#F59E0B] rounded-full w-[52%]" />
                    </div>
                    <span className="text-[11px] font-bold text-[#0E1322]">(52%)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-5 self-end md:self-auto">
                <div className="text-right">
                  <div className="text-xs font-bold text-[#0E1322]">20,000</div>
                  <div className="text-[10px] text-[#94A3B8]">Tickets</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#0E1322]">14,526</div>
                  <div className="text-[10px] text-[#94A3B8]">Check-ins</div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-[#FEF3C7] text-[#92400E] text-xs font-bold">
                  ↝ Average Sales
                </span>
                <div className="text-sm font-black text-[#00D09C]">₦10,545,000</div>
                <button type="button" className="px-3 py-1.5 rounded-xl bg-[#00D09C] text-white text-xs font-semibold">
                  Revenue
                </button>
              </div>
            </div>

            {/* Event 3: Burna Boy */}
            <div className="bg-white rounded-2xl border border-[#EEF2F6] p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-16 rounded-xl bg-[#FEF2F2] text-[#991B1B] p-1 text-center flex flex-col justify-between shrink-0 border border-red-200">
                  <span className="text-[7px] font-bold text-red-700">LOVE, DAMINI</span>
                  <span className="text-[9px] font-black leading-tight">BURNA</span>
                  <span className="text-[6px] text-red-600">LIVE</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-[#0E1322]">Burna Boy Live in Lagos</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0369A1] font-semibold">
                      Upcoming
                    </span>
                  </div>
                  <div className="text-xs text-[#64748B] mt-0.5">Eko Convention Center, VI • Mon 29, Dec - 19:00 PM</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-36 h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                      <div className="h-full bg-[#EF4444] rounded-full w-[35%]" />
                    </div>
                    <span className="text-[11px] font-bold text-[#0E1322]">(35%)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-5 self-end md:self-auto">
                <div className="text-right">
                  <div className="text-xs font-bold text-[#0E1322]">20,000</div>
                  <div className="text-[10px] text-[#94A3B8]">Tickets</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#0E1322]">8,526</div>
                  <div className="text-[10px] text-[#94A3B8]">Check-ins</div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-[#FEE2E2] text-[#991B1B] text-xs font-bold">
                  ↓ Low Sales
                </span>
                <div className="text-sm font-black text-[#00D09C]">₦5,358,000</div>
                <button type="button" className="px-3 py-1.5 rounded-xl bg-[#00D09C] text-white text-xs font-semibold">
                  Revenue
                </button>
              </div>
            </div>
          </div>

          {/* Pagination Footer */}
          <div className="flex items-center justify-between text-xs text-[#64748B] pt-2">
            <span>Showing 1 to 3 of 12</span>
            <div className="flex items-center gap-1.5">
              <span className="w-7 h-7 rounded-lg bg-[#FBBF24] text-white flex items-center justify-center font-bold">◀</span>
              <span className="w-7 h-7 rounded-lg bg-[#00D09C] text-white flex items-center justify-center font-bold">1</span>
              <span className="w-7 h-7 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center">2</span>
              <span className="w-7 h-7 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center">3</span>
              <span className="w-7 h-7 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center">4</span>
              <span className="w-7 h-7 rounded-lg bg-[#FBBF24] text-white flex items-center justify-center font-bold">▶</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 3. Check-Ins Staff Dashboard Screenshot
 * As seen in IMG_3065.jpeg
 */
export const TicketaStaffDashboard: React.FC = () => {
  return (
    <div className="w-full bg-[#FAFBFD] rounded-2xl md:rounded-3xl border border-[#E2E8F0] shadow-[0_16px_40px_rgba(0,0,0,0.06)] overflow-hidden text-[#0E1322] font-sans">
      {/* Top Banner */}
      <div className="bg-white p-4 sm:p-5 border-b border-[#EEF2F6] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-14 rounded-xl bg-slate-900 text-white p-1 text-center flex flex-col justify-between shrink-0 shadow-xs">
            <span className="text-[6px] text-emerald-400 font-bold">DAVIDO</span>
            <span className="text-[8px] font-black">2026</span>
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-black text-[#0E1322]">Davido Live in Lagos</h4>
            <div className="text-xs text-[#64748B]">Thu 25, Dec 2026 - 19:00 PM • Eko Convention Center, VI</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#F8FAFC] border border-[#EEF2F6] px-3 py-1.5 rounded-xl text-left">
            <div className="text-[9px] uppercase font-bold text-[#64748B]">Assigned Gate</div>
            <div className="text-xs font-bold text-[#0E1322] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00D09C]" /> VIP Entrance
            </div>
          </div>
          <div className="bg-[#F8FAFC] border border-[#EEF2F6] px-3 py-1.5 rounded-xl text-left">
            <div className="text-[9px] uppercase font-bold text-[#64748B]">Session Time</div>
            <div className="text-xs font-bold text-[#0E1322] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-sky-500" /> 5:00 PM - 11:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Grid */}
      <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: QR Viewport + Today's Overview */}
        <div className="lg:col-span-7 space-y-6">
          {/* QR Scanner Viewport */}
          <div className="bg-white rounded-2xl border border-[#EEF2F6] p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3">
              <div>
                <span className="text-sm font-bold text-[#0E1322]">Scan Ticket</span>
                <p className="text-[11px] text-[#64748B]">Scan QR code to check-in attendee</p>
              </div>
              <button type="button" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] font-semibold text-[#475569]">
                <Sun className="w-3.5 h-3.5 text-amber-500" /> Light
              </button>
            </div>

            {/* Simulated Dark Scanner Frame */}
            <div className="relative w-full aspect-[16/10] bg-[#10141E] rounded-2xl flex flex-col items-center justify-center p-6 text-center text-white overflow-hidden shadow-inner">
              {/* Corner Targeting Marks */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#00D09C] rounded-tl-lg" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#00D09C] rounded-tr-lg" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#00D09C] rounded-bl-lg" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#00D09C] rounded-br-lg" />

              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#00D09C] mb-3">
                <QrCode className="w-8 h-8" />
              </div>
              <div className="text-xs sm:text-sm font-bold">Position QR code within the frame</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Scanning will start automatically</div>

              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-300">
                Having trouble scanning? <span className="text-[#00D09C] font-semibold underline cursor-pointer">Try manual check-In</span>
              </div>
            </div>
          </div>

          {/* Today's Overview */}
          <div className="bg-white rounded-2xl border border-[#EEF2F6] p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#0E1322]">Today's Overview</span>
              <span className="text-xs text-[#00D09C] font-semibold cursor-pointer hover:underline">View Full Report</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#E6FAF4] p-3 rounded-xl border border-[#CCFBF1]">
                <div className="text-[10px] font-bold text-[#0D9488]">Total Check-Ins</div>
                <div className="text-lg font-black text-[#0E1322] mt-0.5">1,243</div>
                <div className="text-[10px] text-[#059669] font-medium mt-1">12.5% vs yesterday</div>
              </div>

              <div className="bg-[#EFF6FF] p-3 rounded-xl border border-[#DBEAFE]">
                <div className="text-[10px] font-bold text-[#1D4ED8]">Valid Check-Ins</div>
                <div className="text-lg font-black text-[#0E1322] mt-0.5">1,180</div>
                <div className="text-[10px] text-[#2563EB] font-medium mt-1">95.0%</div>
              </div>

              <div className="bg-[#FEFCE8] p-3 rounded-xl border border-[#FEF08A]">
                <div className="text-[10px] font-bold text-[#A16207]">Pending Check-Ins</div>
                <div className="text-lg font-black text-[#0E1322] mt-0.5">63</div>
                <div className="text-[10px] text-[#854D0E] font-medium mt-1">—</div>
              </div>

              <div className="bg-[#FEF2F2] p-3 rounded-xl border border-[#FECACA]">
                <div className="text-[10px] font-bold text-[#B91C1C]">Invalid Tickets</div>
                <div className="text-lg font-black text-[#0E1322] mt-0.5">12</div>
                <div className="text-[10px] text-[#DC2626] font-medium mt-1">0.9%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Recent Check-Ins & Quick Actions */}
        <div className="lg:col-span-5 space-y-6">
          {/* Recent Check-Ins */}
          <div className="bg-white rounded-2xl border border-[#EEF2F6] p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-1">
              <span className="text-sm font-bold text-[#0E1322]">Recent Check-Ins</span>
              <span className="text-xs text-[#00D09C] font-semibold cursor-pointer">View All</span>
            </div>

            <div className="space-y-2.5">
              {[
                { name: 'Isaiah Makinde', ticket: 'KT-9X82-2K71', time: '10:24 AM' },
                { name: 'Alex Adebayo', ticket: 'KT-9J74-6G90', time: '10:23 AM' },
                { name: 'Chioma Obi', ticket: 'KT-9P22-5L22', time: '10:12 AM' },
                { name: 'Fedrick Aluko', ticket: 'KT-9055-9W45', time: '10:10 AM' },
                { name: 'Lauren James', ticket: 'KT-9G71-5K29', time: '10:08 AM' },
              ].map((attendee, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8FAFC] border border-[#EEF2F6]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#00D09C]/10 text-[#00D09C] font-bold text-xs flex items-center justify-center">
                      {attendee.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0E1322]">{attendee.name}</div>
                      <div className="text-[10px] text-[#64748B]">VIP Ticket • {attendee.ticket}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-[#94A3B8]">{attendee.time}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#00D09C]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="bg-white rounded-2xl border border-[#EEF2F6] p-5 shadow-xs space-y-3">
            <span className="text-sm font-bold text-[#0E1322]">Quick Actions</span>
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-3 rounded-xl bg-[#E6FAF4] text-center border border-[#CCFBF1] cursor-pointer hover:bg-[#D4F7EC]">
                <QrCode className="w-5 h-5 mx-auto text-[#00D09C] mb-1" />
                <span className="text-[10px] font-bold text-[#0E1322]">Scan Ticket</span>
              </div>
              <div className="p-3 rounded-xl bg-[#EFF6FF] text-center border border-[#DBEAFE] cursor-pointer hover:bg-[#E0EFFF]">
                <UserCheck className="w-5 h-5 mx-auto text-blue-600 mb-1" />
                <span className="text-[10px] font-bold text-[#0E1322]">Manual Check-In</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF5FF] text-center border border-[#F3E8FF] cursor-pointer hover:bg-[#F3E8FF]">
                <Search className="w-5 h-5 mx-auto text-purple-600 mb-1" />
                <span className="text-[10px] font-bold text-[#0E1322]">Search Attendee</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FAFC] text-center border border-[#E2E8F0] cursor-pointer">
                <FileText className="w-5 h-5 mx-auto text-slate-600 mb-1" />
                <span className="text-[10px] font-bold text-[#0E1322]">VIP List</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FEFCE8] text-center border border-[#FEF08A] cursor-pointer">
                <Calendar className="w-5 h-5 mx-auto text-amber-600 mb-1" />
                <span className="text-[10px] font-bold text-[#0E1322]">Today's Check-Ins</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FEF2F2] text-center border border-[#FECACA] cursor-pointer">
                <AlertTriangle className="w-5 h-5 mx-auto text-red-600 mb-1" />
                <span className="text-[10px] font-bold text-[#0E1322]">Invalid Tickets</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="bg-white px-5 py-3 border-t border-[#EEF2F6] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#64748B] gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#00D09C]" />
          <span>You are checking in for <strong className="text-[#0E1322]">VIP Entrance</strong>. Ensure every ticket is scanned and validated.</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[#00D09C]" />
          <span>Connected • Last synced: 10:24:30 AM</span>
        </div>
      </div>
    </div>
  );
};

/**
 * 4. Organizer Payments & Payouts Dashboard Screenshot
 * As seen in IMG_3066.jpeg
 */
export const TicketaPaymentsDashboard: React.FC = () => {
  return (
    <div className="w-full bg-[#FAFBFD] rounded-2xl md:rounded-3xl border border-[#E2E8F0] shadow-[0_16px_40px_rgba(0,0,0,0.06)] overflow-hidden text-[#0E1322] font-sans">
      {/* Top Breadcrumb Header */}
      <div className="bg-white px-5 py-3.5 border-b border-[#EEF2F6] flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
          <span>Settings</span>
          <span>/</span>
          <span className="text-[#0E1322]">Payments &amp; Payouts</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#64748B]">
            <Bell className="w-3.5 h-3.5" />
          </div>
          <div className="w-7 h-7 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center">
            FLY
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        {/* Tab Navigation Bar */}
        <div className="flex items-center gap-6 border-b border-[#EEF2F6] pb-3 text-xs sm:text-sm font-bold">
          <span className="text-[#00D09C] border-b-2 border-[#00D09C] pb-3 -mb-3 cursor-pointer">Overview</span>
          <span className="text-[#64748B] hover:text-[#0E1322] cursor-pointer">Payouts</span>
          <span className="text-[#64748B] hover:text-[#0E1322] cursor-pointer">Refunds &amp; Fees</span>
        </div>

        {/* QuickPay Connection Banner */}
        <div className="bg-[#E6FAF4] border border-[#CCFBF1] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-700 text-white font-black text-xs flex items-center justify-center shrink-0">
              QP
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#0E1322]">QuickPay is connected for processing payments</div>
              <div className="text-[11px] text-[#0D9488]">PCI-DSS Compliant • Next batch payout in 48 hours</div>
            </div>
          </div>
          <button type="button" className="px-4 py-2 rounded-xl bg-[#00D09C] hover:bg-[#00B788] text-white text-xs font-bold shadow-xs transition-colors self-start sm:self-auto">
            Manage QuickPay Account
          </button>
        </div>

        {/* 4 Balances / Payouts Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white p-4 rounded-2xl border border-[#EEF2F6] shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6FAF4] text-[#00D09C] flex items-center justify-center shrink-0">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-[#64748B]">Available Balance</div>
              <div className="text-sm sm:text-base font-extrabold text-[#0E1322]">₦1,789,896,000</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#EEF2F6] shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6FAF4] text-[#00D09C] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-[#64748B]">Pending Balance</div>
              <div className="text-sm sm:text-base font-extrabold text-[#0E1322]">₦389,896,000</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#EEF2F6] shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6FAF4] text-[#00D09C] flex items-center justify-center shrink-0">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-[#64748B]">Total Earning</div>
              <div className="text-sm sm:text-base font-extrabold text-[#0E1322]">₦3,368,896,000</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#EEF2F6] shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6FAF4] text-[#00D09C] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-[#64748B]">Next Payout Date</div>
              <div className="text-sm sm:text-base font-extrabold text-[#0E1322]">January 18, 2025</div>
            </div>
          </div>
        </div>

        {/* 2-Column Split: Gateways & Payout Destination VS Payment History */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (Gateways & Bank Account) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Payment Gateways Card */}
            <div className="bg-white p-5 rounded-2xl border border-[#EEF2F6] shadow-xs space-y-3">
              <span className="text-sm font-bold text-[#0E1322]">Payment Gateways</span>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-[#EEF2F6]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-700 text-white font-bold text-xs flex items-center justify-center">
                    QP
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0E1322]">QuickPay</div>
                    <div className="text-[10px] text-[#64748B]">Connected gateway that processes ticket payments.</div>
                  </div>
                </div>
                <button type="button" className="px-2.5 py-1 rounded-lg bg-[#00D09C] text-white text-[11px] font-bold">
                  Manage
                </button>
              </div>
            </div>

            {/* Payout Destination Card */}
            <div className="bg-white p-5 rounded-2xl border border-[#EEF2F6] shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#0E1322]">Payout Destination</span>
                <button type="button" className="px-2.5 py-1 rounded-lg bg-[#00D09C] text-white text-[11px] font-bold">
                  Edit
                </button>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#EEF2F6] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-orange-600 text-white font-black text-[10px] flex items-center justify-center shrink-0">
                  GTBank
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0E1322]">GTBank **** 5399</div>
                  <div className="text-[10px] text-[#64748B]">Account Holder: Flytimefest Ltd.</div>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#E6FAF4] border border-[#CCFBF1] text-[11px] text-[#00A87E] font-medium flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#00D09C]" />
                <span>Payment secured and encrypted via QuickPay</span>
              </div>
            </div>
          </div>

          {/* Right Column: Payment History Table */}
          <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-[#EEF2F6] shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-1">
              <span className="text-sm font-bold text-[#0E1322]">Payment History</span>
              <div className="flex items-center gap-2">
                <div className="bg-[#F8FAFC] border border-[#EEF2F6] rounded-lg px-2 py-1 text-[11px] text-[#64748B]">
                  Filter: All
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="bg-[#F8FAFC] rounded-xl px-3 py-1.5 flex items-center gap-2 border border-[#EEF2F6]">
              <Search className="w-3.5 h-3.5 text-[#94A3B8]" />
              <span className="text-xs text-[#94A3B8]">Search payouts...</span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#EEF2F6] text-[#64748B] text-[10px] uppercase font-bold tracking-wider">
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">Bank Account</th>
                    <th className="pb-2">Status</th>
                    <th className="pb-2 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EEF2F6]">
                  {[
                    { date: 'Nov 19, 2025', amount: '₦1,466,866,000', bank: 'GTBank **** 5399', status: 'Pending', color: 'bg-amber-100 text-amber-800' },
                    { date: 'Oct 10, 2025', amount: '₦850,538,000', bank: 'GTBank **** 5399', status: 'Paid', color: 'bg-emerald-100 text-emerald-800' },
                    { date: 'July 30, 2025', amount: '₦904,866,000', bank: 'GTBank **** 5399', status: 'Paid', color: 'bg-emerald-100 text-emerald-800' },
                    { date: 'Mar 27, 2025', amount: '₦450,100,000', bank: 'GTBank **** 5399', status: 'Paid', color: 'bg-emerald-100 text-emerald-800' },
                    { date: 'Mar 27, 2025', amount: '₦450,100,000', bank: 'GTBank **** 5399', status: 'Paid', color: 'bg-emerald-100 text-emerald-800' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F8FAFC]">
                      <td className="py-2.5 font-medium text-[#0E1322]">{row.date}</td>
                      <td className="py-2.5 font-bold text-[#0E1322]">{row.amount}</td>
                      <td className="py-2.5 text-[#64748B]">{row.bank}</td>
                      <td className="py-2.5">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${row.color}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-2.5 text-right">
                        <span className="px-2.5 py-1 rounded-lg bg-[#00D09C] text-white text-[10px] font-bold cursor-pointer hover:bg-[#00B788]">
                          View
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-2 border-t border-[#EEF2F6]">
              <span>Showing 1 to 5 of 20</span>
              <div className="flex items-center gap-1">
                <span className="w-5 h-5 rounded bg-[#FBBF24] text-white flex items-center justify-center font-bold text-[9px]">◀</span>
                <span className="w-5 h-5 rounded bg-[#00D09C] text-white flex items-center justify-center font-bold text-[9px]">1</span>
                <span className="w-5 h-5 rounded bg-white border border-[#E2E8F0] flex items-center justify-center text-[9px]">2</span>
                <span className="w-5 h-5 rounded bg-white border border-[#E2E8F0] flex items-center justify-center text-[9px]">3</span>
                <span className="w-5 h-5 rounded bg-white border border-[#E2E8F0] flex items-center justify-center text-[9px]">4</span>
                <span className="w-5 h-5 rounded bg-[#FBBF24] text-white flex items-center justify-center font-bold text-[9px]">▶</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
