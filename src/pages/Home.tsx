import React from 'react';
import { ArrowUpRight, Code, Terminal, Cpu, Layout } from 'lucide-react';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-between border-b border-neutral-900 overflow-hidden px-6 max-w-7xl mx-auto py-12">
        {/* Top Meta info */}
        <div className="z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-neutral-400 tracking-widest uppercase">
          <div></div>
          <button 
            onClick={() => onNavigate('/contact')}
            className="text-white hover:text-neutral-300 transition-colors cursor-pointer font-mono font-bold px-3 py-1 bg-neutral-900 border border-neutral-800 rounded"
          >
            HIRE ME →
          </button>
        </div>

        {/* Hero Content Grid */}
        <div className="z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none uppercase select-none font-['Space_Grotesk']">
              <span className="block text-white">CREATIVE</span>
              <span className="block text-neutral-500">DEVELOPER</span>
            </h1>

            <div className="text-xs text-neutral-400 tracking-widest uppercase pt-2 font-mono">
              BUILDING DIGITAL EXPERIENCES.
            </div>

            <p className="text-neutral-300 text-base sm:text-lg max-w-lg leading-relaxed font-light">
              &quot;Bringing creativity and technology together to build meaningful digital experiences.&quot;
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/projects')}
                className="px-8 py-4 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-white/10 font-mono"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('/about')}
                className="px-8 py-4 bg-neutral-900/80 border border-neutral-700 text-white font-bold text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors cursor-pointer backdrop-blur-sm font-mono"
              >
                ABOUT ME
              </button>
            </div>
          </div>

          {/* Techie Keyboard Illustration Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-250 animate-pulse"></div>
              <div className="relative bg-neutral-950/90 border border-neutral-800 rounded-2xl p-6 backdrop-blur-xl space-y-4 shadow-2xl">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-2">
                    <img src="/public/assets/aistudio/ObytLogo_565fc7e8.png" alt="OByt Logo" className="w-4 h-4 object-contain filter grayscale brightness-75 opacity-80" />
                    <span className="text-neutral-300">obyt.tsx</span>
                  </span>
                  <span className="text-neutral-500">OBYT</span>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-black aspect-[4/3] flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="/public/assets/aistudio/WhatsApp_Image_2026-11-03_at_10.19.32_AM_06f84783.jpeg"
                    alt="Samson Olatunde Coding Illustration"
                    className="w-full h-full object-contain p-4 filter contrast-125 invert-0 opacity-90 animate-pulse duration-[3000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="px-3 py-1 bg-black/80 border border-neutral-800 rounded-full text-[10px] font-mono text-neutral-300 backdrop-blur-md">
                      // OByt
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-lg font-mono text-xs text-neutral-300 flex items-center justify-between">
                  <span className="text-emerald-400">&gt; obyt --init</span>
                  <span className="text-neutral-500">● READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Bio Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="text-xs text-neutral-500 tracking-widest uppercase font-mono">INTRODUCTION</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-['Space_Grotesk']">
              SAMSON OLATUNDE.
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed">
              I&apos;m Samson Olatunde, a Frontend Developer and Graphic Designer passionate about building visually engaging, responsive and user-friendly digital experiences. I enjoy combining creative design with frontend development to transform ideas into functional digital products. I&apos;m also continuously developing my UI/UX design skills and exploring better ways to create meaningful digital experiences.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <button
                onClick={() => onNavigate('/about')}
                className="text-xs tracking-widest text-white uppercase underline underline-offset-4 hover:text-neutral-400 transition-colors flex items-center gap-1 cursor-pointer font-mono"
              >
                READ MORE ABOUT ME <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 lg:pt-0">
            <div className="p-8 bg-neutral-900/60 border border-neutral-800 rounded-xl backdrop-blur-sm space-y-3">
              <div className="text-xs text-neutral-500 tracking-widest uppercase font-mono">ORGANISATION</div>
              <div className="text-lg font-bold text-white font-['Space_Grotesk']">OByt</div>
              <p className="text-xs text-neutral-400">Creative digital development & design practice.</p>
            </div>

            <div className="p-8 bg-neutral-900/60 border border-neutral-800 rounded-xl backdrop-blur-sm space-y-3">
              <div className="text-xs text-neutral-500 tracking-widest uppercase font-mono">FOCUS</div>
              <div className="text-lg font-bold text-white font-['Space_Grotesk']">Creative Engineering</div>
              <p className="text-xs text-neutral-400">Crafting clean interfaces and responsive web apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Summary Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-neutral-900">
        <div className="space-y-12">
          <div className="space-y-4 max-w-xl">
            <div className="text-xs text-neutral-500 tracking-widest uppercase font-mono">EXPERTISE & SKILLS</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-['Space_Grotesk']">
              TECHNICAL PROFICIENCY.
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              Tools and technologies I use to bring digital ideas into production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl backdrop-blur-sm space-y-4">
              <div className="p-3 bg-black border border-neutral-800 rounded-lg w-fit text-white">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">Frontend Development</h3>
              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>

            <div className="p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl backdrop-blur-sm space-y-4">
              <div className="p-3 bg-black border border-neutral-800 rounded-lg w-fit text-white">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">Backend Development</h3>
              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>

            <div className="p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl backdrop-blur-sm space-y-4">
              <div className="p-3 bg-black border border-neutral-800 rounded-lg w-fit text-white">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">Design</h3>
              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                <li>Graphic Design</li>
                <li>UI Design</li>
                <li>Visual Design</li>
                <li>UI/UX Design (Learning)</li>
              </ul>
            </div>

            <div className="p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl backdrop-blur-sm space-y-4">
              <div className="p-3 bg-black border border-neutral-800 rounded-lg w-fit text-white">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">Tools</h3>
              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
