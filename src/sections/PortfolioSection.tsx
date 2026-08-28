import React, { useState } from 'react';
import {
  Laptop,
  Megaphone,
  Layers,
  Code2,
  Ticket,
  CreditCard,
  Music2,
  Calendar,
  QrCode,
  Sparkles,
} from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { ProjectCard, ProjectItem } from '../components/ProjectCard';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('UI/UX Design');

  const filterTabs = [
    { id: 'UI/UX Design', label: 'UI/UX Design', icon: <Laptop className="w-4 h-4" /> },
    { id: 'Digital Marketing', label: 'Digital Marketing', icon: <Megaphone className="w-4 h-4" /> },
    { id: 'SAAS Management', label: 'SAAS Management', icon: <Layers className="w-4 h-4" /> },
    { id: 'Development', label: 'Development', icon: <Code2 className="w-4 h-4" /> },
  ];

  const projects: ProjectItem[] = [
    {
      id: 'ziba-pay',
      slug: 'ziba-pay',
      title: 'Ziba Pay Website',
      categories: ['Fintech', 'UI/UX Design', 'Web Development'],
      tags: 'Fintech • UI/UX Design • Web Development',
      categoryFilter: ['UI/UX Design', 'Development', 'SAAS Management'],
      description:
        'Streamlined digital payment operations for businesses across Africa with a secure and user-friendly platform.',
      imageBg: 'bg-[#000000]',
      renderVisual: (
        <div className="relative w-full max-w-[360px] h-full min-h-[190px] flex items-center justify-center">
          {/* Laptop Mockup */}
          <div className="relative w-[78%] z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
            <div className="bg-[#1E293B] p-1.5 rounded-t-lg border border-slate-700">
              <div className="bg-[#FAFBFD] rounded p-2.5 flex flex-col items-center justify-center text-center min-h-[120px]">
                <div className="text-[8px] font-bold tracking-tight text-[#0F172A] mb-0.5">
                  ziba<span className="text-[#22C55E]">pay</span>
                </div>
                <div className="text-[10px] font-extrabold text-[#0E1322] leading-tight max-w-[140px]">
                  Simplifying Payments for Businesses in Africa
                </div>
                <div className="mt-1 flex items-center gap-1">
                  <span className="text-[6px] px-1.5 py-0.5 rounded-full bg-[#EBFDF2] text-[#22C55E] font-medium">
                    Instant Settlement
                  </span>
                  <span className="text-[6px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                    Multi-currency
                  </span>
                </div>
              </div>
            </div>
            <div className="h-2 bg-[#94A3B8] rounded-b-md mx-auto w-[105%]" />
          </div>

          {/* Mobile Phone Mockup Overlay Left */}
          <div className="absolute left-1 bottom-1 w-[28%] z-20 drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]">
            <div className="bg-[#0F172A] p-1 rounded-xl border border-slate-700 shadow-2xl">
              <div className="bg-white rounded-lg p-2 min-h-[125px] flex flex-col justify-between">
                <div>
                  <div className="text-[6px] font-bold text-slate-800">ziba pay</div>
                  <div className="text-[7px] font-extrabold text-[#0E1322] leading-tight mt-1">
                    Fast &amp; Secure Payments
                  </div>
                </div>
                <div className="bg-[#F0FDF4] p-1 rounded border border-[#86EFAC]/50 my-1">
                  <div className="text-[5.5px] text-[#15803D] font-bold">Transfer Successful</div>
                  <div className="text-[7px] font-black text-[#0F172A]">$1,450.00</div>
                </div>
                <div className="w-full py-0.5 bg-[#22C55E] text-white text-[5px] font-bold text-center rounded">
                  View Receipt
                </div>
              </div>
            </div>
          </div>

          {/* Card Mockup Overlay Right */}
          <div className="absolute right-1 bottom-3 w-[30%] z-20 drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]">
            <div className="bg-[#0F172A] p-1 rounded-xl border border-slate-700">
              <div className="bg-white rounded-lg p-2 min-h-[110px] flex flex-col justify-between">
                <div className="w-4 h-4 rounded bg-[#EBFDF2] flex items-center justify-center text-[#22C55E]">
                  <CreditCard className="w-2.5 h-2.5" />
                </div>
                <div className="text-[6px] font-bold text-[#0E1322]">Virtual Card</div>
                <div className="text-[5px] text-[#64748B]">**** 4892</div>
                <div className="h-1 bg-[#22C55E] rounded-full w-3/4" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ticketa',
      slug: 'ticketa',
      title: 'Ticketa Event Platform',
      categories: ['Events', 'Ticketing', 'SaaS', 'UI/UX Design'],
      tags: 'Events • Ticketing • SaaS • UI/UX Design',
      categoryFilter: ['UI/UX Design', 'SAAS Management', 'Development'],
      description:
        'A digital event ticketing solution for discovering events, selling tickets, managing attendees, and handling event check-in.',
      imageBg: 'bg-[#0B132B]',
      renderVisual: (
        <div className="relative w-full max-w-[360px] h-full min-h-[190px] flex items-center justify-center">
          {/* Main Dashboard Screen */}
          <div className="relative w-[82%] z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
            <div className="bg-[#1E293B] p-1.5 rounded-lg border border-slate-700">
              <div className="bg-[#0F172A] rounded p-2.5 text-white min-h-[125px] flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                  <div className="flex items-center gap-1">
                    <Ticket className="w-3 h-3 text-[#22C55E]" />
                    <span className="text-[9px] font-bold tracking-tight text-white">Ticketa</span>
                  </div>
                  <span className="text-[6px] px-1.5 py-0.5 bg-[#22C55E]/20 text-[#4ADE80] font-semibold rounded">
                    Live Check-in
                  </span>
                </div>

                {/* Event Discovery Banner */}
                <div className="my-1.5 bg-gradient-to-r from-emerald-950/80 to-slate-900 p-2 rounded border border-emerald-900/40 flex items-center justify-between">
                  <div>
                    <div className="text-[7px] text-emerald-400 font-bold uppercase tracking-wider">Featured Event</div>
                    <div className="text-[9px] font-black text-white">Tech Innovation Summit '26</div>
                    <div className="text-[6px] text-slate-400">1,850 Tickets Sold (92%)</div>
                  </div>
                  <div className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <QrCode className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Metric Bars */}
                <div className="grid grid-cols-3 gap-1 pt-1 border-t border-slate-800">
                  <div className="bg-slate-900/80 p-1 rounded">
                    <div className="text-[5px] text-slate-400">Attendees</div>
                    <div className="text-[7px] font-bold text-white">4,200</div>
                  </div>
                  <div className="bg-slate-900/80 p-1 rounded">
                    <div className="text-[5px] text-slate-400">Revenue</div>
                    <div className="text-[7px] font-bold text-[#22C55E]">$128.4K</div>
                  </div>
                  <div className="bg-slate-900/80 p-1 rounded">
                    <div className="text-[5px] text-slate-400">Scan Rate</div>
                    <div className="text-[7px] font-bold text-sky-400">99.8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Pass Overlay Badge */}
          <div className="absolute -bottom-1 -right-1 w-[32%] z-20 drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]">
            <div className="bg-[#22C55E] p-1.5 rounded-xl text-white shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[6px] font-bold uppercase tracking-wider">VIP PASS</span>
                <Sparkles className="w-2.5 h-2.5" />
              </div>
              <div className="text-[8px] font-black mt-1">ADMIT ONE</div>
              <div className="mt-1 pt-1 border-t border-white/20 flex items-center justify-between text-[5px]">
                <span>Gate A</span>
                <span className="font-mono">#TK-889</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'music-streaming',
      slug: 'music-streaming',
      title: 'Music Streaming Dashboard',
      categories: ['SaaS', 'Dashboard Design', 'UI/UX Design'],
      tags: 'SaaS • Dashboard Design • UI/UX Design',
      categoryFilter: ['UI/UX Design', 'SAAS Management'],
      description:
        'A modern streaming dashboard designed to deliver a seamless and personalized music experience for users.',
      imageBg: 'bg-[#E5E9F0]',
      renderVisual: (
        <div className="relative w-full max-w-[360px] h-full min-h-[190px] flex items-center justify-center p-2">
          {/* Framer Reference Musyc UI Mockup */}
          <div className="w-[96%] bg-white rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.15)] border border-slate-200/80 overflow-hidden text-[#0F172A] p-2.5">
            {/* Top Bar with Window controls & Search */}
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="ml-1 text-[8px] font-black tracking-tight text-slate-800 flex items-center gap-0.5">
                  <Music2 className="w-2 h-2 text-indigo-600" /> musyc
                </span>
              </div>
              <div className="bg-slate-100 rounded-full px-2 py-0.5 text-[6px] text-slate-400 w-28 text-center">
                Search artists, songs...
              </div>
              <div className="w-3.5 h-3.5 rounded-full bg-amber-200 border border-amber-300" />
            </div>

            {/* Dashboard Content */}
            <div className="mt-2 grid grid-cols-12 gap-2 items-start">
              {/* Left Sidebar */}
              <div className="col-span-3 space-y-1 text-[6px] text-slate-500 font-medium">
                <div className="text-[5.5px] uppercase font-bold text-slate-400 tracking-wider">Menu</div>
                <div className="text-indigo-600 font-bold bg-indigo-50 px-1 py-0.5 rounded">Home</div>
                <div>Discover</div>
                <div>Radio</div>
                <div>Library</div>
              </div>

              {/* Center Hero Banner */}
              <div className="col-span-9 space-y-1.5">
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-2 text-white">
                  <div className="text-[5px] uppercase tracking-wider font-semibold opacity-80">What's Hot?</div>
                  <div className="text-[8px] font-black">Top Song of The Month</div>
                  <div className="mt-1 flex items-center gap-1">
                    <span className="px-1.5 py-0.5 bg-white text-indigo-700 rounded-full text-[5px] font-bold">
                      ▶ Play
                    </span>
                    <span className="text-[5px] opacity-90">Follow</span>
                  </div>
                </div>

                {/* Album Cards Row */}
                <div className="grid grid-cols-3 gap-1">
                  <div className="bg-slate-50 rounded p-1 border border-slate-100">
                    <div className="h-6 rounded bg-gradient-to-br from-indigo-400 to-blue-500 mb-0.5" />
                    <div className="text-[5.5px] font-bold truncate">Fantastic Mix</div>
                  </div>
                  <div className="bg-slate-50 rounded p-1 border border-slate-100">
                    <div className="h-6 rounded bg-gradient-to-br from-pink-400 to-rose-500 mb-0.5" />
                    <div className="text-[5.5px] font-bold truncate">Discover Monthly</div>
                  </div>
                  <div className="bg-slate-50 rounded p-1 border border-slate-100">
                    <div className="h-6 rounded bg-gradient-to-br from-amber-400 to-orange-500 mb-0.5" />
                    <div className="text-[5.5px] font-bold truncate">New Releases</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filteredProjects = projects.filter((project) =>
    project.categoryFilter.includes(activeFilter)
  );

  return (
    <Section
      id="portfolio"
      className="bg-white text-zinc-900 py-20 sm:py-24 lg:py-32 border-t border-[#EEF2F6]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          {/* Eyebrow Label with green decorative dashes */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
            <span className="text-[12px] sm:text-[13px] font-bold text-[#22C55E] tracking-[0.18em] uppercase">
              Our Portfolio
            </span>
            <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#0E1322] tracking-[-0.03em] leading-[1.18]">
            Digital Product Designed for Real Business Impact
          </h2>

          {/* Supporting Paragraph */}
          <p className="mt-5 text-base sm:text-lg text-[#5F6D7E] leading-relaxed max-w-2xl font-normal">
            Explore a selection of our recent projects and see how we've helped businesses
            elevate their brand and drive measurable growth.
          </p>
        </div>

        {/* Filter Tabs Pill Bar */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div
            id="portfolio-filter-tabs"
            className="inline-flex flex-wrap items-center justify-center p-1.5 sm:p-2 rounded-full bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(0,0,0,0.04)] gap-1 sm:gap-2 max-w-full overflow-x-auto"
          >
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`filter-tab-${tab.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setActiveFilter(tab.id)}
                  type="button"
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#22C55E] text-white shadow-[0_2px_10px_rgba(34,197,94,0.35)]'
                      : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-[#64748B]'}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid:
            - Desktop: 2 columns with generous cards
            - Tablet: 2 columns
            - Mobile: 1 column
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 lg:gap-10">
          {(filteredProjects.length > 0 ? filteredProjects : projects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
