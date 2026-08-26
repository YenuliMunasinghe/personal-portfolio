import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-[60px] md:py-[120px] px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#fafafa]">
            Let's Connect<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-3 text-lg text-[#a1a1aa]">Reach out for project collaborations or internships</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start max-w-3xl mx-auto">
          
          {/* Direct handles */}
          <div className="md:col-span-5 space-y-4">
            <p className="text-sm text-[#a1a1aa] leading-relaxed font-light">
              Feel free to send a message using the form or connect directly through email, GitHub, or LinkedIn.
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2.5 text-[#a1a1aa] hover:text-white transition-colors text-left"
                title="Copy Gmail"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400 shrink-0" /> : <Mail className="w-4 h-4 text-blue-400 shrink-0" />}
                <span className="break-all">{copied ? "Copied!" : personalInfo.email}</span>
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#a1a1aa] hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="break-all">github.com/YenuliMunasinghe</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#a1a1aa] hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="break-all">linkedin.com/in/yenuli-munasinghe-6b6327354</span>
              </a>
            </div>
          </div>

          {/* Minimal Form */}
          <div className="md:col-span-7">
            {formSubmitted ? (
              <div className="p-6 rounded-xl border border-zinc-800 bg-[#111827]/10 text-center space-y-2">
                <h4 className="text-sm font-mono text-emerald-400">Message Sent Successfully</h4>
                <p className="text-xs text-[#a1a1aa] font-light">I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#fafafa] placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 text-sm transition-all font-light"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#fafafa] placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 text-sm transition-all font-light"
                  />
                </div>

                <textarea
                  required
                  rows={4}
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#fafafa] placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 text-sm transition-all resize-none font-light"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl font-mono text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-900/10 transition-all flex items-center justify-center gap-1.5 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
