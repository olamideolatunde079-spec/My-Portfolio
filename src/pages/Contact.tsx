import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram, MessageCircle, ArrowUpRight, CheckCircle2, Loader2, AlertCircle, ExternalLink, ShieldAlert } from 'lucide-react';

interface ContactProps {
  onNavigate: (path: string) => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const targetEmail = 'olamideolatunde079@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [needsActivation, setNeedsActivation] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setErrorMessage(null);
    setNeedsActivation(false);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _subject: `Portfolio Message: ${formData.subject || formData.name}`,
          _template: 'table'
        })
      });

      const data = await response.json();

      if (data.success === 'false' || data.message?.toLowerCase().includes('activation')) {
        setNeedsActivation(true);
        setSubmitted(true);
      } else if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setSubmitted(true);
      } else {
        throw new Error(data.message || 'Transmission failed');
      }
    } catch (err: unknown) {
      console.warn('Form transmission error:', err);
      setErrorMessage(
        'Could not complete web delivery right now. You can reach out directly through any of my social profiles or email!'
      );
    } finally {
      setIsSending(false);
    }
  };

  const socials = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/olamideolatunde079-spec' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/samson-olatunde-920b8041a/' },
    { name: 'X (Twitter)', icon: Twitter, url: 'https://x.com/Olamideola205' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/olamideolatunde079?srtk=MWp2cDhzNnh4cW5tNA==' },
    { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/2348061720487' },
    { name: 'Email', icon: Mail, url: `mailto:${targetEmail}` }
  ];

  return (
    <div className="text-white min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3 border-b border-neutral-900 pb-8">
          <div className="text-xs text-neutral-500 font-mono tracking-widest uppercase">CONTACT &amp; INQUIRIES</div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase font-['Space_Grotesk']">
            LET&apos;S CREATE SOMETHING MEANINGFUL.
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed">
            &quot;Have a project, collaboration or opportunity in mind? I&apos;d love to hear from you.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Social Profiles & Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white font-['Space_Grotesk']">SOCIAL PROFILES</h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Connect with me across GitHub, LinkedIn, X, Instagram, WhatsApp, or Email.
              </p>
            </div>

            {/* Social Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {socials.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 bg-neutral-900/60 border border-neutral-800 rounded-xl flex flex-col items-center justify-center gap-2.5 hover:bg-neutral-800 hover:border-neutral-600 transition-all group backdrop-blur-sm cursor-pointer"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-mono text-neutral-300 group-hover:text-white transition-colors">{social.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Location & Academics Card */}
            <div className="p-5 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-1.5 backdrop-blur-sm">
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-mono">LOCATION &amp; ACADEMICS</div>
              <div className="text-white font-mono text-sm">Jalingo, Taraba State, Nigeria</div>
              <div className="text-emerald-400 text-xs font-mono flex items-center gap-2 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Taraba State University / Computer Science
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8 relative backdrop-blur-sm">
            {submitted ? (
              <div className="py-6 space-y-6 animate-in fade-in duration-300">
                {needsActivation ? (
                  /* FormSubmit One-Time Activation Notice */
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto">
                      <ShieldAlert className="w-6 h-6" />
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                        ACTIVATION EMAIL SENT!
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                        Please check your <strong>Inbox</strong> or <strong>Spam / Junk</strong> folder at{' '}
                        <strong className="text-white font-mono bg-neutral-800 px-1.5 py-0.5 rounded">{targetEmail}</strong>{' '}
                        and click <span className="text-amber-400 font-bold">&quot;Activate Form&quot;</span> to receive submissions.
                      </p>
                    </div>

                    <div className="text-center pt-2">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setNeedsActivation(false);
                        }}
                        className="text-xs font-mono text-neutral-400 hover:text-white underline cursor-pointer"
                      >
                        Back to form
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Standard Success Confirmation */
                  <div className="text-center space-y-5">
                    <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center mx-auto shadow-lg shadow-white/10">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">MESSAGE SENT!</h3>
                    <div className="space-y-2 max-w-md mx-auto text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      <p>
                        Thank you for reaching out, <span className="text-white font-semibold">{formData.name}</span>!
                      </p>
                      <p className="text-neutral-400">
                        Your message has been received and Samson will reply back to <span className="text-neutral-200 font-mono">{formData.email}</span>.
                      </p>
                    </div>
                    <div className="pt-3 flex justify-center">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setNeedsActivation(false);
                          setFormData({ name: '', email: '', subject: '', message: '' });
                        }}
                        className="px-6 py-2.5 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors cursor-pointer font-mono"
                      >
                        SEND ANOTHER MESSAGE
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-white font-['Space_Grotesk']">SEND A MESSAGE</h2>
                  <p className="text-neutral-400 text-xs">
                    Fill out the form below to get in touch.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-950/40 border border-red-800/60 rounded-xl space-y-2 text-xs text-red-200">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-3 pt-1">
                  <div className="space-y-1">
                    <label className="text-[11px] text-neutral-400 tracking-wider uppercase block font-mono">
                      YOUR NAME <span className="text-white">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-3.5 py-2.5 bg-black border border-neutral-800 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-sm font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-neutral-400 tracking-wider uppercase block font-mono">
                      YOUR EMAIL ADDRESS <span className="text-white">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-3.5 py-2.5 bg-black border border-neutral-800 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-sm font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-neutral-400 tracking-wider uppercase block font-mono">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Project Collaboration or Freelance Inquiry"
                      className="w-full px-3.5 py-2.5 bg-black border border-neutral-800 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-sm font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-neutral-400 tracking-wider uppercase block font-mono">
                      MESSAGE <span className="text-white">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, collaboration or opportunity..."
                      className="w-full px-3.5 py-2.5 bg-black border border-neutral-800 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-sm resize-none font-sans"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-3.5 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer font-mono disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>SENDING MESSAGE...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
