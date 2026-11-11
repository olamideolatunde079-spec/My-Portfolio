import React from 'react';
import { ArrowUpRight, Code, Cpu, Layout, Terminal, Sparkles } from 'lucide-react';
import techImage from '../assets/about-tech.jpeg';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="text-white min-h-screen pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="space-y-4 border-b border-neutral-900 pb-12">
          <div className="text-xs text-neutral-500 tracking-widest uppercase">ABOUT ME</div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase">
            SAMSON OLATUNDE.
          </h1>
          <p className="text-neutral-400 text-base max-w-2xl leading-relaxed">
            Frontend Developer, Graphic Designer, and Computer Science student based in Jalingo, Taraba State, Nigeria.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">INTRODUCTION</h2>
            <p className="text-neutral-300 text-base leading-relaxed">
              I&apos;m Samson Olatunde, a Frontend Developer and Graphic Designer passionate about building visually engaging, responsive and user-friendly digital experiences. I enjoy combining creative design with frontend development to transform ideas into functional digital products. I&apos;m also continuously developing my UI/UX design skills and exploring better ways to create meaningful digital experiences.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Based in Jalingo, Taraba State, Nigeria, I am currently pursuing my degree in Computer Science at Taraba State University, blending academic computer science principles with hands-on web development practice.
            </p>

            <div className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-2xl backdrop-blur-sm space-y-4">
              <div className="text-xs text-neutral-500 tracking-widest uppercase font-mono">QUICK FACTS</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-neutral-800/80 pb-2.5">
                  <span className="text-neutral-400">Name</span>
                  <span className="text-white font-mono">Samson Olatunde</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/80 pb-2.5">
                  <span className="text-neutral-400">Location</span>
                  <span className="text-white font-mono">Jalingo, Taraba State, Nigeria</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/80 pb-2.5">
                  <span className="text-neutral-400">Education</span>
                  <span className="text-white font-mono">Taraba State University (Computer Science)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Focus</span>
                  <span className="text-white font-mono">Frontend & UI Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Tech Aesthetic Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-neutral-950 border border-neutral-800 rounded-2xl p-5 backdrop-blur-sm space-y-4 shadow-2xl">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5 text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>identity.tsx</span>
                  </span>
                  <span className="text-neutral-500 font-mono text-[10px]">OByt</span>
                </div>

                <div className="overflow-hidden rounded-xl bg-black border border-neutral-900 aspect-square flex items-center justify-center p-3 group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={techImage}
                    alt="Tech Aesthetic by Samson Olatunde"
                    className="w-full h-full object-contain filter contrast-125 brightness-110"
                  />
                </div>

                <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-lg text-xs font-mono text-neutral-300 flex items-center justify-between">
                  <span className="text-neutral-400">// design &amp; code</span>
                  <span className="text-emerald-400">● CREATIVE PRACTICE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey & Background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-neutral-900 pt-16">
          <div className="p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl backdrop-blur-sm space-y-4">
            <div className="text-xs text-neutral-500 tracking-widest uppercase">01 / FRONTEND</div>
            <h3 className="text-xl font-bold text-white">Frontend Development</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              My journey in web development started from curiosity about how digital interfaces work. I specialize in HTML, CSS, JavaScript, and TypeScript, building responsive web applications with clean architecture.
            </p>
          </div>

          <div className="p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl backdrop-blur-sm space-y-4">
            <div className="text-xs text-neutral-500 tracking-widest uppercase">02 / DESIGN</div>
            <h3 className="text-xl font-bold text-white">Graphic Design & UI/UX</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              With a strong background in graphic design and visual composition, I bridge the gap between aesthetics and code. I am currently deepening my UI/UX design skills to create intuitive user journeys.
            </p>
          </div>

          <div className="p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl backdrop-blur-sm space-y-4">
            <div className="text-xs text-neutral-500 tracking-widest uppercase">03 / ACADEMIC</div>
            <h3 className="text-xl font-bold text-white">Computer Science</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Studying Computer Science at Taraba State University provides me with foundational knowledge in software engineering principles, algorithms, and problem-solving methodologies.
            </p>
          </div>
        </div>

        {/* Skills Breakdown */}
        <div className="border-t border-neutral-900 pt-16 space-y-12">
          <div className="space-y-4">
            <div className="text-xs text-neutral-500 tracking-widest uppercase">CAPABILITIES</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              SKILLS & TECHNOLOGIES.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl backdrop-blur-sm space-y-4">
              <div className="p-3 bg-black border border-neutral-800 rounded-lg w-fit text-white">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Frontend Development</h3>
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
              <h3 className="text-lg font-bold text-white">Backend Development</h3>
              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>

            <div className="p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl backdrop-blur-sm space-y-4">
              <div className="p-3 bg-black border border-neutral-800 rounded-lg w-fit text-white">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Design</h3>
              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                <li>Graphic Design</li>
                <li>UI Design</li>
                <li>Visual Design</li>
                <li>UI/UX Design (Currently learning)</li>
              </ul>
            </div>

            <div className="p-8 bg-neutral-900/60 border border-neutral-800 rounded-lg backdrop-blur-sm space-y-4">
              <div className="p-3 bg-black border border-neutral-800 rounded-lg w-fit text-white">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Tools</h3>
              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-12 bg-neutral-900/60 border border-neutral-800 rounded-2xl backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Want to work together?</h3>
            <p className="text-neutral-400 text-sm">Get in touch to discuss projects or collaborations.</p>
          </div>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-8 py-4 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
