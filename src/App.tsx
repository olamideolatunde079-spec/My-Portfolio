import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GridParticlesBackground } from './components/GridParticlesBackground';
import { CustomCursor } from './components/CustomCursor';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <About onNavigate={handleNavigate} />;
      case '/projects':
        return <Projects onNavigate={handleNavigate} />;
      case '/contact':
        return <Contact onNavigate={handleNavigate} />;
      case '/':
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black relative">
      <CustomCursor />
      <GridParticlesBackground />
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
      <main className="relative z-10">
        {renderPage()}
      </main>
      <div className="relative z-10">
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
