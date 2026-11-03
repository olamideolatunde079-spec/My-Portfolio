import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  onNavigate: (path: string) => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="text-white min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-neutral-900 pb-12">
          <div className="text-xs text-neutral-500 tracking-widest uppercase">CONTACT</div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase">
            LET&apos;S CREATE SOMETHING MEANINGFUL.
          </h1>
          <p className="text-neutral-400 text-base max-w-xl leading-relaxed">
            &quot;Have a project, collaboration or opportunity in mind? I&apos;d love to hear from you.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information & Socials */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">DIRECT CONNECTIONS</h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Reach out via my genuine social profiles or send a direct message through the contact form.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:olamideolatunde079@gmail.com"
                className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl flex items-center justify-between hover:bg-neutral-900 transition-colors group backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-black border border-neutral-800 rounded-lg text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 uppercase tracking-widest">EMAIL</div>
                    <div className="text-white font-mono text-sm sm:text-base">olamideolatunde079@gmail.com</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://github.com/olamideolatunde079-spec"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl flex items-center justify-between hover:bg-neutral-900 transition-colors group backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-black border border-neutral-800 rounded-lg text-white">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 uppercase tracking-widest">GITHUB</div>
                    <div className="text-white font-mono text-sm sm:text-base">github.com/olamideolatunde079-spec</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/samson-olatunde-920b8041a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl flex items-center justify-between hover:bg-neutral-900 transition-colors group backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-black border border-neutral-800 rounded-lg text-white">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 uppercase tracking-widest">LINKEDIN</div>
                    <div className="text-white font-mono text-sm sm:text-base">linkedin.com/in/samson-olatunde-920b8041a</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://x.com/Olamideola205"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl flex items-center justify-between hover:bg-neutral-900 transition-colors group backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-black border border-neutral-800 rounded-lg text-white">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 uppercase tracking-widest">X (TWITTER)</div>
                    <div className="text-white font-mono text-sm sm:text-base">x.com/Olamideola205</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://www.instagram.com/olamideolatunde079?srtk=MWp2cDhzNnh4cW5tNA=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl flex items-center justify-between hover:bg-neutral-900 transition-colors group backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-black border border-neutral-800 rounded-lg text-white">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 uppercase tracking-widest">INSTAGRAM</div>
                    <div className="text-white font-mono text-sm sm:text-base">instagram.com/olamideolatunde079</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
              </a>
            </div>

            <div className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-2 backdrop-blur-sm">
              <div className="text-xs text-neutral-500 uppercase tracking-widest">LOCATION & STATUS</div>
              <div className="text-white font-mono text-sm">Jalingo, Taraba State, Nigeria</div>
              <div className="text-emerald-400 text-xs font-mono flex items-center gap-2 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Taraba State University / Computer Science
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-8 sm:p-12 relative backdrop-blur-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white">MESSAGE SENT.</h3>
                <p className="text-neutral-400 text-sm max-w-sm mx-auto">
                  Thank you for reaching out, {formData.name}. I have received your message and will respond promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-8 py-3 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">SEND A MESSAGE</h2>
                  <p className="text-neutral-400 text-sm">Fill out the form below to connect directly with Samson Olatunde.</p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-xs text-neutral-400 tracking-wider uppercase block">
                      YOUR NAME <span className="text-white">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3 bg-black border border-neutral-800 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-neutral-400 tracking-wider uppercase block">
                      EMAIL ADDRESS <span className="text-white">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 bg-black border border-neutral-800 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-neutral-400 tracking-wider uppercase block">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Project Collaboration"
                      className="w-full px-4 py-3 bg-black border border-neutral-800 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-neutral-400 tracking-wider uppercase block">
                      MESSAGE <span className="text-white">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, collaboration or opportunity..."
                      className="w-full px-4 py-3 bg-black border border-neutral-800 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>TRANSMIT MESSAGE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
