import React from 'react';
import { Github, Linkedin, Mail, Instagram, Twitter, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black/90 border-t border-neutral-900 text-neutral-400 py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-white text-2xl font-bold tracking-tight font-['Space_Grotesk']">OByt</h2>
          <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
            Creative digital brand by Samson Olatunde. Building responsive, user-friendly web applications, frontend solutions, and cognizant digital experiences.
          </p>
          <div className="flex items-center gap-3 pt-2 flex-wrap">
            <a 
              href="https://github.com/olamideolatunde079-spec" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/samson-olatunde-920b8041a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://x.com/Olamideola205" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/olamideolatunde079?srtk=MWp2cDhzNnh4cW5tNA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/234061720487" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a 
              href="mailto:olamideolatunde079@gmail.com" 
              className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white text-xs tracking-widest uppercase font-semibold mb-4 font-mono">NAVIGATION</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <button onClick={() => { onNavigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigate('/about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">
                About
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigate('/projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-xs tracking-widest uppercase font-semibold mb-4 font-mono">BRAND INFO</h3>
          <p className="text-xs text-neutral-400 leading-relaxed mb-4">
            OByt Creative Practice. Frontend Development & Design.
          </p>
        </div>
      </div>
    </footer>
  );
};
