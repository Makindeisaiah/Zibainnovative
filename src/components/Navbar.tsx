import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Solutions', href: '#strategic-solutions' },
  { label: 'Industry', href: '#industries' },
  { label: 'Team', href: '#team' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled
          ? 'shadow-[0_2px_16px_rgba(0,0,0,0.06)]'
          : 'border-b border-[#EEF2F6]'
      }`}
    >
      <Container size="wide" className="h-20 flex items-center justify-between">
        {/* Left Side: Brand Logo + Primary Nav Links */}
        <div className="flex items-center gap-8 lg:gap-12 xl:gap-14">
          {/* Brand Logo */}
          <a
            id="brand-logo"
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] rounded-lg shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-[#22C55E] font-bold text-lg tracking-normal shadow-sm group-hover:scale-105 transition-transform">
              <span>Z</span>
            </div>
            <span className="text-[#0E1322] font-bold text-[18px] sm:text-[19px] tracking-tight">
              Ziba Innovatives
            </span>
          </a>

          {/* Desktop Navigation Links (Inline as shown in reference) */}
          <nav
            id="desktop-nav"
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] font-medium text-[#5F6D7E] hover:text-[#0E1322] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Side: Vertical Divider + CTA Button */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="h-7 w-[1.5px] bg-[#E2E8F0]" aria-hidden="true" />
          <Button
            id="nav-cta-desktop"
            href="#cta"
            variant="primary"
            size="md"
            className="font-semibold px-5 py-2.5 text-[14px] bg-[#22C55E] hover:bg-[#16A34A] text-white shadow-sm"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile / Tablet Menu Toggle Button */}
        <div className="flex lg:hidden items-center">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2.5 rounded-full text-zinc-900 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="lg:hidden bg-white border-b border-zinc-200 px-6 py-6 shadow-xl transition-all duration-200"
        >
          <div className="flex flex-col space-y-3.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#0E1322] hover:text-[#22C55E] hover:bg-zinc-50 px-3 py-2 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-100 mt-2">
              <Button
                id="nav-cta-mobile"
                href="#cta"
                variant="primary"
                size="md"
                className="w-full justify-center py-3 text-[15px] bg-[#22C55E] hover:bg-[#16A34A] text-white shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

