import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('/')}
          className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
        >
          <img 
            src="/public/assets/aistudio/ObytLogo_565fc7e8.png" 
            alt="OByt Logo" 
            className="w-9 h-9 object-contain filter grayscale brightness-75 opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <span className="font-bold text-lg tracking-widest text-white uppercase group-hover:text-neutral-400 transition-colors font-['Space_Grotesk']">
            OByt
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-xs tracking-widest transition-all flex items-center gap-1.5 focus:outline-none py-2 cursor-pointer ${
                  isActive 
                    ? 'text-white font-bold border-b border-white' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-neutral-900 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`w-full text-left py-3 text-sm tracking-widest flex items-center gap-3 border-b border-neutral-900 cursor-pointer ${
                  isActive ? 'text-white font-bold' : 'text-neutral-400'
                }`}
              >
                <span className="text-base">{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
