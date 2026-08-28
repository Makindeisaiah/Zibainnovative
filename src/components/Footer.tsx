import React from 'react';
import { Mail, Phone, MapPin, Instagram, Globe } from 'lucide-react';
import { Container } from '../components/Container';

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-[#052414] text-white pt-16 sm:pt-20 lg:pt-24 pb-10 border-t border-[#09351E]"
    >
      <Container size="wide">
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#0E3D23]">
          {/* Col 1: Brand (lg:col-span-3) */}
          <div className="lg:col-span-3 pr-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-[#166534]/50 shadow-inner">
                <span className="text-xl font-bold text-[#22C55E]">Z</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Ziba Innovatives
              </span>
            </div>
            <p className="text-sm sm:text-[15px] text-[#A3B899] leading-relaxed max-w-xs font-normal">
              Empowering growth through innovation and technology.
            </p>
          </div>

          {/* Col 2: Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <div className="mb-5 inline-block">
              <h4 className="text-[15px] font-semibold text-white tracking-tight">
                Navigation
              </h4>
              <div className="w-6 h-[2px] bg-[#22C55E] rounded-full mt-1.5" />
            </div>
            <ul className="space-y-3 text-sm text-[#A3B899]">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <div className="mb-5 inline-block">
              <h4 className="text-[15px] font-semibold text-white tracking-tight">
                Services
              </h4>
              <div className="w-6 h-[2px] bg-[#22C55E] rounded-full mt-1.5" />
            </div>
            <ul className="space-y-3 text-sm text-[#A3B899]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Mobile Application
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#strategic-solutions" className="hover:text-white transition-colors">
                  Product Strategy
                </a>
              </li>
              <li>
                <a href="#strategic-solutions" className="hover:text-white transition-colors">
                  Digital Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Support (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <div className="mb-5 inline-block">
              <h4 className="text-[15px] font-semibold text-white tracking-tight">
                Support
              </h4>
              <div className="w-6 h-[2px] bg-[#22C55E] rounded-full mt-1.5" />
            </div>
            <ul className="space-y-3 text-sm text-[#A3B899]">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#cookies" className="hover:text-white transition-colors">
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <div className="mb-5 inline-block">
              <h4 className="text-[15px] font-semibold text-white tracking-tight">
                Connect
              </h4>
              <div className="w-6 h-[2px] bg-[#22C55E] rounded-full mt-1.5" />
            </div>
            <p className="text-sm text-[#A3B899] mb-5">
              Follow us on social media or reach out directly.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 mb-6">
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-[#0F3D24] border border-[#166534]/60 hover:border-[#22C55E] hover:bg-[#155231] text-white flex items-center justify-center transition-all text-xs font-bold font-sans"
              >
                in
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-xl bg-[#0F3D24] border border-[#166534]/60 hover:border-[#22C55E] hover:bg-[#155231] text-white flex items-center justify-center transition-all text-xs font-bold font-sans"
              >
                𝕏
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-[#0F3D24] border border-[#166534]/60 hover:border-[#22C55E] hover:bg-[#155231] text-white flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4 stroke-[2]" />
              </a>

              {/* Globe / Website */}
              <a
                href="#"
                aria-label="Website"
                className="w-10 h-10 rounded-xl bg-[#0F3D24] border border-[#166534]/60 hover:border-[#22C55E] hover:bg-[#155231] text-white flex items-center justify-center transition-all"
              >
                <Globe className="w-4 h-4 stroke-[2]" />
              </a>
            </div>

            {/* Direct Contact Info */}
            <ul className="space-y-3 text-sm text-[#A3B899]">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#22C55E] shrink-0" />
                <a
                  href="mailto:hello@ziba.com"
                  className="hover:text-white transition-colors"
                >
                  hello@ziba.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#22C55E] shrink-0" />
                <a
                  href="tel:+2348101234567"
                  className="hover:text-white transition-colors"
                >
                  +234 810 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-[#A3B899]">
          {/* Left: Copyright & Legal */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-4 sm:gap-x-6">
            <span>
              2026 <span className="text-[#22C55E]">Ziba Innovation</span>. All
              rights reserved.
            </span>
            <span className="hidden sm:inline text-[#1E5235]">|</span>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Services
            </a>
            <a href="#cookies" className="hover:text-white transition-colors">
              Cookies Policy
            </a>
          </div>

          {/* Right: Author / Made By */}
          <div className="text-[#A3B899] hover:text-white transition-colors text-center md:text-right">
            Made by Ziba Innovations
          </div>
        </div>
      </Container>
    </footer>
  );
};
