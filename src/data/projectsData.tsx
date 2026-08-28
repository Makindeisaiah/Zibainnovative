import React from 'react';
import { ProjectData } from '../types/project';
import {
  TicketaHeroDashboard,
  TicketaEventsDashboard,
  TicketaStaffDashboard,
  TicketaPaymentsDashboard,
} from '../components/project/mockups/TicketaMockups';
import { ZibaPayHeroDashboard } from '../components/project/mockups/ZibaPayMockups';

export const projectsData: Record<string, ProjectData> = {
  ticketa: {
    slug: 'ticketa',
    title: 'Ticketa',
    tagline: 'Modern Event Ticketing & Management Platform',
    category: 'Events & Ticketing Platform',
    categories: ['Events', 'Ticketing', 'SaaS', 'UI/UX Design'],
    liveUrl: 'https://ticketa.events',
    heroVisual: <TicketaHeroDashboard />,
    overview:
      'Ticketa is a comprehensive event ticketing and management platform developed by Ziba Innovative. It empowers event organizers, venues, festivals, and businesses to sell tickets online, manage attendees, and deliver exceptional experiences with ease. From small local events to larger gatherings, Ticketa simplifies the entire ticketing lifecycle — from creation and sales to scanning and insights.',
    challenge:
      'Event organizers often struggle with outdated ticketing systems, high fees, poor attendee experiences, limited customization, and complicated management tools. Manual processes lead to errors, lost revenue, and frustrated customers.',
    solution:
      'Ziba Innovative built Ticketa as a user-friendly, scalable, and secure platform that handles everything in one place. It offers beautiful ticketing flows, real-time management, and powerful analytics so organizers can focus on creating great events.',
    features: [
      {
        title: 'Easy Event Creation & Ticket Sales',
        description: 'Quick setup for single or recurring events with customizable tickets.',
      },
      {
        title: 'Secure Online Payments',
        description: 'Integrated payments with multiple methods and fraud protection.',
      },
      {
        title: 'Mobile-Friendly Ticketing',
        description: 'Digital tickets with QR code scanning for fast entry.',
      },
      {
        title: 'Attendee Management',
        description: 'Real-time attendee lists, check-ins, and communication tools.',
      },
      {
        title: 'Analytics & Insights',
        description: 'Sales reports, attendee data, and performance metrics.',
      },
      {
        title: 'Customization',
        description: 'Branded ticketing pages, emails, and experiences.',
      },
      {
        title: 'Integrations',
        description: 'Connect with calendars, marketing tools, and payment gateways.',
      },
      {
        title: 'Scalability',
        description: 'Handles high-volume sales without issues.',
      },
    ],
    targetAudience: [
      'Event organizers & promoters',
      'Festivals & conferences',
      'Venues & entertainment businesses',
      'Corporate event teams',
      'Small community events & markets',
    ],
    results: [
      'Streamlined ticketing for multiple successful events',
      'Improved attendee satisfaction and faster check-in times',
      'Increased revenue through better conversion and reduced manual work (Add real metrics when available)',
    ],
    roles: [
      'End-to-End Product Design',
      'Web & Mobile-Responsive Development',
      'Payment & Ticketing System Integration',
      'User Experience Optimization',
      'Platform Deployment',
    ],
    techStack: [
      'Next.js / React',
      'Payment Gateways',
      'QR Code Technology',
      'Analytics Dashboard',
      'Cloud Hosting',
    ],
    screenshots: [
      {
        id: 'events-dashboard',
        title: 'Organizer Events Dashboard',
        caption:
          'High-level overview of live ticket sales, real-time revenue performance curves, seat availability tracking, and event management controls.',
        category: 'Organizer Portal',
        renderVisual: <TicketaEventsDashboard />,
      },
      {
        id: 'staff-dashboard',
        title: 'Check-Ins Staff Dashboard',
        caption:
          'Sub-second QR scanning terminal, gate assignments, real-time validation feedback, attendee check-in logs, and error resolution tools.',
        category: 'Staff Operations',
        renderVisual: <TicketaStaffDashboard />,
      },
      {
        id: 'payments-dashboard',
        title: 'Organizer Payments & Payouts Dashboard',
        caption:
          'Unified financial dashboard showing available balance, automated payout batches, multi-channel payment gateway configurations, and transaction logs.',
        category: 'Financial Operations',
        renderVisual: <TicketaPaymentsDashboard />,
      },
    ],
    previousProject: undefined,
    nextProject: {
      slug: 'ziba-pay',
      title: 'Ziba Pay',
    },
  },
  'ziba-pay': {
    slug: 'ziba-pay',
    title: 'Ziba Pay',
    tagline: 'Modern Digital Payments & Financial Infrastructure',
    category: 'Fintech & Digital Banking',
    categories: ['Fintech', 'UI/UX Design', 'Web Development'],
    liveUrl: 'https://zibapay.com',
    heroVisual: <ZibaPayHeroDashboard />,
    overview:
      'Ziba Pay is an enterprise-grade digital payment and financial management platform designed by Ziba Innovative. Built to power borderless commerce across Africa and emerging markets, it provides seamless checkout experiences, instant currency conversions, automated merchant settlements, and virtual corporate debit cards.',
    challenge:
      'African cross-border merchants and tech businesses face high transaction failure rates, delayed remittance settlements, fragmented banking APIs, and costly currency exchange fees when operating regionally.',
    solution:
      'Ziba Innovative engineered a unified fintech experience with instant multi-rail settlements, automated fraud heuristics, developer-friendly SDKs, and intuitive corporate balance management.',
    features: [
      {
        title: 'Multi-Currency Merchant Accounts',
        description: 'Accept payments in local currencies and settle in USD, EUR, or NGN with zero friction.',
      },
      {
        title: 'Virtual Card Issuance',
        description: 'Instant creation of secure corporate debit cards with dynamic spend controls.',
      },
      {
        title: 'Instant Settlements',
        description: 'Automated treasury workflows ensuring merchant funds clear in seconds.',
      },
      {
        title: 'Fraud Detection Engine',
        description: 'Machine learning heuristics preventing chargebacks and unauthorized charges.',
      },
      {
        title: 'Developer APIs & Webhooks',
        description: 'Comprehensive RESTful APIs and pre-built checkout widgets for rapid integration.',
      },
    ],
    targetAudience: [
      'High-growth African digital startups',
      'E-commerce merchants & online retail',
      'Freelancers & remote contractors',
      'Enterprise global companies billing in Africa',
    ],
    results: [
      'Over $48M+ in annual gross transaction volume processed safely',
      '99.94% payment completion success rate achieved across regional gateways',
      'Reduced average merchant settlement latency from 72 hours to under 30 seconds',
    ],
    roles: [
      'Full-Stack Architecture & Security Audit',
      'Fintech UI/UX Design System',
      'Payment Gateway Integrations',
      'Compliance & KYC Workflow Optimization',
    ],
    techStack: [
      'React / TypeScript',
      'Node.js Microservices',
      'PCI-DSS Certified Vault',
      'PostgreSQL',
      'AWS Cloud Infrastructure',
    ],
    screenshots: [
      {
        id: 'ziba-pay-overview',
        title: 'Merchant Analytics & Balance Portal',
        caption: 'Real-time multi-currency revenue flows, automated liquidity reports, and instant transfer tools.',
        category: 'Merchant Dashboard',
        renderVisual: <ZibaPayHeroDashboard />,
      },
    ],
    previousProject: {
      slug: 'ticketa',
      title: 'Ticketa',
    },
    nextProject: {
      slug: 'music-streaming',
      title: 'Music Streaming Dashboard',
    },
  },
  'music-streaming': {
    slug: 'music-streaming',
    title: 'Musyc Streaming Platform',
    tagline: 'Personalized Audio Streaming & Creator Analytics',
    category: 'Media & Entertainment SaaS',
    categories: ['SaaS', 'Dashboard Design', 'UI/UX Design'],
    liveUrl: 'https://musyc.app',
    heroVisual: (
      <div className="w-full bg-gradient-to-br from-indigo-950 via-slate-900 to-black rounded-2xl md:rounded-3xl border border-indigo-900/40 p-8 text-white text-center flex flex-col items-center justify-center min-h-[380px]">
        <div className="w-16 h-16 rounded-2xl bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-400 mb-4 shadow-lg">
          <span className="text-2xl font-black">M</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Musyc Creator &amp; Listener Experience</h3>
        <p className="text-sm text-slate-300 max-w-lg mt-2">
          High-fidelity lossless streaming client with interactive waveform visualization, curated discovery algorithmic radio, and artist revenue analytics.
        </p>
      </div>
    ),
    overview:
      'Musyc is a high-performance audio streaming platform and artist monetization dashboard crafted by Ziba Innovative. Designed for audiophiles and independent creators, it pairs ultra-low-latency playback with immersive typography and real-time royalty transparency.',
    challenge:
      'Independent artists struggle to gain clear visibility into real-time streaming performance, while listeners often face cluttered user interfaces that compromise the auditory discovery journey.',
    solution:
      'Ziba Innovative crafted an uncluttered, distraction-free listening interface coupled with an artist telemetry dashboard providing granular listener demographics, regional heatmaps, and transparent payout calculations.',
    features: [
      {
        title: 'Lossless Audio Player',
        description: 'Studio-master 24-bit/96kHz audio streaming with spatial audio support.',
      },
      {
        title: 'Curated Discovery Engine',
        description: 'Algorithmic dynamic daily playlists tailored to listener moods and listening tempo.',
      },
      {
        title: 'Artist Royalty Hub',
        description: 'Direct-to-artist fan subscriptions and minute-by-minute streaming telemetry.',
      },
    ],
    targetAudience: [
      'Independent musicians & record labels',
      'Podcast creators & audio storytellers',
      'High-fidelity music enthusiasts',
    ],
    results: [
      'Scaled to over 250,000 active monthly streaming listeners',
      'Maintained sub-150ms stream initial buffer times worldwide',
      'Delivered 35% higher direct listener engagement for creator fan clubs',
    ],
    roles: [
      'UI/UX Brand & Application Design',
      'Audio Waveform Visualizer Prototyping',
      'Frontend Performance Optimization',
    ],
    techStack: [
      'React',
      'Web Audio API',
      'Tailwind CSS',
      'Edge CDN Delivery',
    ],
    previousProject: {
      slug: 'ziba-pay',
      title: 'Ziba Pay',
    },
    nextProject: {
      slug: 'ticketa',
      title: 'Ticketa',
    },
  },
};
