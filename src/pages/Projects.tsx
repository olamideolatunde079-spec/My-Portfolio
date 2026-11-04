import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, X, Clock, Sun, Calculator as CalcIcon, Layout, Sparkles, MessageSquare, Share2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  onNavigate: (path: string) => void;
}

const projects: Project[] = [
  {
    id: 'proj-archive',
    title: 'ARCHIVE',
    category: 'Digital Museum / Editorial',
    description: "Nigeria's Creative History Museum. An editorial digital platform exploring Nigerian photography, music, fashion and design.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Editorial Design'],
    year: '2026',
    status: 'COMPLETED',
    liveUrl: '#',
    githubUrl: 'https://github.com/olamideolatunde079-spec'
  },
  {
    id: 'proj-handyng',
    title: 'HandyNG',
    category: 'Marketplace / Local Services',
    description: 'A local services marketplace connecting customers with trusted artisans and service providers, starting in Taraba State.',
    technologies: ['React', 'Node.js', 'Express.js', 'Tailwind CSS'],
    year: '2026',
    status: 'IN DEVELOPMENT',
    liveUrl: '#',
    githubUrl: 'https://github.com/olamideolatunde079-spec'
  },
  {
    id: 'proj-obytchat',
    title: 'OBytChat',
    category: 'Messaging / Communication',
    description: 'A WhatsApp-like messaging application for conversations and communication, providing a familiar, responsive chat experience.',
    technologies: ['React', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    year: '2026',
    status: 'COMPLETED',
    liveUrl: '#',
    githubUrl: 'https://github.com/olamideolatunde079-spec'
  },
  {
    id: 'proj-obyts',
    title: 'OByts',
    category: 'Social Networking / Media',
    description: 'A social networking application inspired by platforms like Instagram and other modern social media platforms for sharing visual content and updates.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    year: '2026',
    status: 'COMPLETED',
    liveUrl: '#',
    githubUrl: 'https://github.com/olamideolatunde079-spec'
  },
  {
    id: 'proj-obytgemini',
    title: 'OBytGemini',
    category: 'AI / Conversational Interface',
    description: 'A Gemini-inspired AI chat application featuring multiple AI model integrations and a conversational assistant interface.',
    technologies: ['React', 'Gemini API', 'TypeScript', 'Tailwind CSS'],
    year: '2026',
    status: 'COMPLETED',
    liveUrl: '#',
    githubUrl: 'https://github.com/olamideolatunde079-spec'
  },
  {
    id: 'proj-clockin',
    title: 'Clockin System',
    category: 'Productivity / Management',
    description: 'A time and attendance management system designed for tracking work hours, shifts, and employee punctuality with clean reporting.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage'],
    year: '2026',
    status: 'COMPLETED',
    liveUrl: '#',
    githubUrl: 'https://github.com/olamideolatunde079-spec'
  },
  {
    id: 'proj-weather',
    title: 'Weather App',
    category: 'Utility / API Integration',
    description: 'A weather application providing accurate meteorological information through a clean, responsive interface and animated atmospheric indicators.',
    technologies: ['React', 'Weather API', 'Tailwind CSS', 'TypeScript'],
    year: '2025',
    status: 'COMPLETED',
    liveUrl: '#',
    githubUrl: 'https://github.com/olamideolatunde079-spec'
  },
  {
    id: 'proj-calculator',
    title: 'Calculator',
    category: 'Utility / Interactive',
    description: 'A functional calculator with a clean and intuitive user interface supporting advanced mathematical operations and keyboard input.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    year: '2025',
    status: 'COMPLETED',
    liveUrl: '#',
    githubUrl: 'https://github.com/olamideolatunde079-spec'
  },
  {
    id: 'proj-carousel',
    title: 'Lifestyle Carousel',
    category: 'UI Component / Animation',
    description: 'A visually engaging carousel project showcasing lifestyle content with interactive navigation, smooth transitions, and responsive touch support.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    year: '2025',
    status: 'COMPLETED',
    liveUrl: '#',
    githubUrl: 'https://github.com/olamideolatunde079-spec'
  },
  {
    id: 'proj-oblog',
    title: 'OBlog',
    category: 'Publishing / Developer Platform',
    description: 'A frontend-only developer blogging platform inspired by modern editorial publishing platforms with clean typography and dark mode styling.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    year: '2025',
    status: 'COMPLETED',
    liveUrl: '#',
    githubUrl: 'https://github.com/olamideolatunde079-spec'
  },
  {
    id: 'proj-zenith',
    title: 'Zenith Bank UI Concept',
    category: 'Fintech / UI Design',
    description: 'A banking interface project exploring frontend development and modern digital banking design principles, account dashboards, and transaction flows.',
    technologies: ['React', 'Tailwind CSS', 'UI/UX Design'],
    year: '2025',
    status: 'COMPLETED',
    liveUrl: '#',
    githubUrl: 'https://github.com/olamideolatunde079-spec'
  }
];

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="text-white min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-neutral-900 pb-12">
          <div className="text-xs text-neutral-500 font-mono tracking-widest uppercase">PORTFOLIO ARCHIVE</div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase font-['Space_Grotesk']">
            SELECTED PROJECTS.
          </h1>
          <p className="text-neutral-400 text-base max-w-xl leading-relaxed">
            A curated showcase of digital platforms, messaging apps, utilities, and UI concepts built by Samson Olatunde / OByt.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl backdrop-blur-sm hover:border-neutral-600 transition-all cursor-pointer flex flex-col justify-between space-y-8 relative overflow-hidden"
            >
              {project.status === 'IN DEVELOPMENT' && (
                <div className="absolute top-0 right-0 bg-yellow-500/10 border-b border-l border-yellow-500/30 px-4 py-1.5 rounded-bl-xl text-[10px] font-mono text-yellow-400 tracking-wider">
                  IN DEVELOPMENT
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>{project.year}</span>
                  <span className="text-neutral-400">{project.status === 'IN DEVELOPMENT' ? 'In Progress' : 'Production Ready'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-neutral-300 transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs text-neutral-400 uppercase tracking-widest font-mono">
                  {project.category}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-neutral-800/60">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 bg-black border border-neutral-800 text-xs text-neutral-300 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-white tracking-widest uppercase">
                  <span className="flex items-center gap-1 group-hover:underline font-mono">
                    VIEW DETAILS <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span className="text-neutral-500 font-mono">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200">
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-2xl w-full p-8 relative space-y-6">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white bg-neutral-900 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-500 font-mono">{selectedProject.year}</span>
                  {selectedProject.status === 'IN DEVELOPMENT' && (
                    <span className="px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/30 rounded text-[10px] font-mono text-yellow-400">
                      IN DEVELOPMENT
                    </span>
                  )}
                </div>
                <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                <div className="text-xs text-neutral-400 uppercase tracking-widest font-mono">{selectedProject.category}</div>
              </div>

              <p className="text-neutral-300 text-base leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-2">
                <div className="text-xs text-neutral-500 tracking-wider uppercase font-mono">TECHNOLOGIES</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-neutral-900 border border-neutral-800 text-white font-bold text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer font-mono"
                >
                  <span>GITHUB REPOSITORY</span>
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="p-12 bg-neutral-900/60 border border-neutral-800 rounded-2xl backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 font-['Space_Grotesk']">Want to collaborate?</h3>
            <p className="text-neutral-400 text-sm">Get in touch to discuss projects or opportunities with OByt.</p>
          </div>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-8 py-4 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer font-mono"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
