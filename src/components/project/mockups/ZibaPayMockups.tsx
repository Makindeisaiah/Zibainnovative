import React from 'react';
import {
  CreditCard,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Globe2,
  Lock,
  ArrowDownLeft,
  RefreshCw,
  Zap,
} from 'lucide-react';

export const ZibaPayHeroDashboard: React.FC = () => {
  return (
    <div className="w-full bg-[#0A0E1A] rounded-2xl md:rounded-3xl border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden text-white font-sans p-6 sm:p-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Stats */}
        <div className="md:col-span-6 space-y-5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center font-bold text-base">
              Z
            </div>
            <span className="text-xl font-bold tracking-tight">ziba<span className="text-[#22C55E]">pay</span></span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Simplifying Payments for Businesses in Africa
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Instant settlements, multi-currency processing, and smart virtual card issuance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
              <div className="text-xs text-slate-400">Total Processed</div>
              <div className="text-xl font-extrabold text-[#22C55E] mt-1">$48.2M+</div>
            </div>
            <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
              <div className="text-xs text-slate-400">Success Rate</div>
              <div className="text-xl font-extrabold text-white mt-1">99.94%</div>
            </div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="md:col-span-6 space-y-4">
          {/* Virtual Card Graphic */}
          <div className="bg-gradient-to-tr from-emerald-600 via-teal-700 to-slate-900 p-5 rounded-2xl border border-emerald-500/30 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-emerald-200 uppercase">Corporate Black</span>
                <div className="text-lg font-mono font-bold mt-3">•••• •••• •••• 4892</div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-emerald-200" />
              </div>
            </div>
            <div className="flex justify-between items-end mt-6 text-xs">
              <div>
                <span className="text-[10px] text-emerald-200/70 block">Card Holder</span>
                <span className="font-semibold">ZIBA CORP LTD</span>
              </div>
              <div>
                <span className="text-[10px] text-emerald-200/70 block">Expires</span>
                <span className="font-mono">08/29</span>
              </div>
            </div>
          </div>

          {/* Quick settlement preview */}
          <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ArrowDownLeft className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">Inbound Wire Transfer</span>
                <span className="text-[10px] text-slate-400">Today, 09:41 AM • Lagos Hub</span>
              </div>
            </div>
            <span className="font-mono font-bold text-emerald-400">+$12,500.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
