import React, { useState } from 'react';
import { MessageCircle, Menu, X, ShieldCheck, Award, GraduationCap, Sparkles } from 'lucide-react';
import { WHATSAPP_DISPLAY, generateWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../data/landingData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '訓練方案', href: '#programs' },
    { label: '行為危機分析', href: '#pain-points' },
    { label: '教育心理學解法', href: '#solution' },
    { label: '行為自測工具', href: '#assessment' },
    { label: '教練團隊與資歷', href: '#trainers' },
    { label: '真實個案', href: '#cases' },
    { label: '常見問題', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f9f9ff]/95 backdrop-blur-md border-b border-[#c5c6ce]/30 text-[#111c2c] transition-colors">
      {/* Top micro-bar */}
      <div className="bg-[#031632] text-[#8293b5] text-xs py-1.5 px-4 text-center border-b border-[#1a2b48] flex items-center justify-center gap-2 sm:gap-6 flex-wrap">
        <span className="flex items-center gap-1.5 text-[#d7e2ff] font-medium">
          <GraduationCap className="w-3.5 h-3.5 text-[#ffab69]" />
          香港教育大學教育心理學碩士主理
        </span>
        <span className="hidden sm:inline text-[#374765]">•</span>
        <span className="flex items-center gap-1.5 text-[#ffdcc4] font-medium">
          <Award className="w-3.5 h-3.5 text-[#ffab69]" />
          CPDT-KA 國際認證犬隻訓練師
        </span>
        <span className="hidden sm:inline text-[#374765]">•</span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-[#ffab69]" />
          專業紀律・溫暖陪伴・全港上門實地評估
        </span>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#031632] flex items-center justify-center font-bold text-white shadow-sm group-hover:bg-[#1a2b48] transition-colors">
              <span className="font-headline font-bold text-sm tracking-tighter text-[#ffab69]">K9</span>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold tracking-tight text-[#031632] font-headline flex items-center gap-2">
                DoggyMon K9 Academy
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#ffdcbd] text-[#2c1600] border border-[#f0bd8b]">
                  專業犬隻行為所
                </span>
              </div>
              <p className="text-xs text-[#44474d] font-normal hidden sm:block">
                Professional Discipline. Domestic Warmth.
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#44474d]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#031632] transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-whatsapp-cta"
              href={generateWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ffab69] text-[#783d01] hover:bg-[#ffab69]/90 active:scale-98 font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover-lift transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>立即預約評估</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#031632] hover:bg-[#f0f3ff] focus:outline-none"
            aria-label="打開選單"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#c5c6ce]/40 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#111c2c] hover:text-[#031632] hover:bg-[#f0f3ff] px-3 py-2.5 rounded-lg text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#c5c6ce]/30">
            <a
              id="mobile-nav-whatsapp-cta"
              href={generateWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#ffab69] text-[#783d01] font-bold py-3 px-4 rounded-lg text-center shadow-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp 諮詢任 Sir ({WHATSAPP_DISPLAY})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

