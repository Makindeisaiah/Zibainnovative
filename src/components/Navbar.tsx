import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Our Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Company', href: '#company' },
  { label: 'Contact Us', href: '#contact' },
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
        scrolled ? 'shadow-[0_2px_12px_rgba(0,0,0,0.06)]' : 'border-b border-zinc-100'
      }`}
    >
      <Container size="wide" className="h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="brand-logo"
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49E378] rounded-lg"
        >
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-lg tracking-normal shadow-sm group-hover:scale-105 transition-transform">
            <span className="font-semibold">Z</span>
          </div>
          <span className="text-zinc-950 font-bold text-[19px] tracking-tight">
            Ziba Innovatives
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 lg:gap-10"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] font-medium text-zinc-800 hover:text-black transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49E378] rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center">
          <Button
            id="nav-cta-desktop"
            href="#contact"
            variant="primary"
            size="md"
            className="font-semibold px-6 py-2.5 text-[14px]"
          >
            Explore our Solutions
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2.5 rounded-full text-zinc-900 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49E378] transition-colors"
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
          className="md:hidden bg-white border-b border-zinc-200 px-6 py-6 shadow-xl transition-all duration-200"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-800 hover:text-black hover:bg-zinc-50 px-3 py-2 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-100">
              <Button
                id="nav-cta-mobile"
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center py-3 text-[15px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore our Solutions
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
