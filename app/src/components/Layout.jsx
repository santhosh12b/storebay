import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import { Menu, X } from 'lucide-react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-bgSoft/95 backdrop-blur border-b border-surfaceBorder/50">
        <div className="max-w-[1200px] w-full mx-auto px-[22px]">
          <nav className="relative flex items-center justify-between py-[16px]">
            {/* Logo */}
            <Link to="/" className="font-display font-bold text-[22px] no-underline text-navy z-50">
              store<span className="text-orange">bay</span>
            </Link>
            
            {/* Desktop Center Nav Links */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-[22px] text-[14px]">
              <Link to="/features" className="no-underline text-navy-soft font-medium hover:text-orange">Features</Link>
              <Link to="/pricing" className="no-underline text-navy-soft font-medium hover:text-orange">Pricing</Link>
              <Link to="/faq" className="no-underline text-navy-soft font-medium hover:text-orange">FAQ</Link>
              <Link to="/help" className="no-underline text-navy-soft font-medium hover:text-orange">Help</Link>
            </div>

            {/* Desktop Right Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a href="https://gold-eel-953925.hostingersite.com/" target="_blank" rel="noopener noreferrer" className="font-sans font-semibold text-[14px] no-underline text-navy border border-surfaceBorder bg-white py-2 px-4 rounded-[10px] hover:border-navy transition-colors">
                Live demo
              </a>
              <Link to="/pricing" className="font-sans font-semibold text-[14px] no-underline bg-orange text-white py-2 px-4 rounded-[10px] shadow-premium-sm hover:opacity-90 transition-opacity">
                Get started
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              className="md:hidden p-2 text-navy z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-surfaceBorder shadow-premium py-6 px-6 flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-[16px]">
              <Link to="/features" onClick={toggleMenu} className="no-underline text-navy font-semibold">Features</Link>
              <Link to="/pricing" onClick={toggleMenu} className="no-underline text-navy font-semibold">Pricing</Link>
              <Link to="/faq" onClick={toggleMenu} className="no-underline text-navy font-semibold">FAQ</Link>
              <Link to="/help" onClick={toggleMenu} className="no-underline text-navy font-semibold">Help</Link>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <a href="https://gold-eel-953925.hostingersite.com/" target="_blank" rel="noopener noreferrer" className="text-center font-sans font-semibold text-[15px] no-underline text-navy border border-surfaceBorder bg-white py-3 rounded-xl">
                Live demo
              </a>
              <Link to="/pricing" onClick={toggleMenu} className="text-center font-sans font-semibold text-[15px] no-underline bg-orange text-white py-3 rounded-xl">
                Get started
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
