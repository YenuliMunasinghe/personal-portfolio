import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Check, AlertCircle } from 'lucide-react';
import MediumIcon from './icons/MediumIcon';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID || personalInfo.formspreeId;

    // If Formspree ID is not configured yet, fallback to opening mailto so message is never lost
    if (!formId || formId.trim() === '' || formId === 'YOUR_FORMSPREE_ID') {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Yenuli,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      
      setLoading(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 8000);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId.trim()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 8000);
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(
          data?.errors?.[0]?.message || 
          data?.error || 
          'Failed to send message via form. Please email directly.'
        );
      }
    } catch {
      setErrorMessage('Network connection error. Please email me directly using the link on the left.');
    } finally {
      setLoading(false);
    }
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
              Feel free to send a message using the form or connect directly through email, GitHub, LinkedIn, or Medium.
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

              {personalInfo.medium && (
                <a
                  href={personalInfo.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#a1a1aa] hover:text-emerald-400 transition-colors"
                >
                  <MediumIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="break-all">{personalInfo.medium.replace(/^https?:\/\/(www\.)?/, '')}</span>
                </a>
              )}
            </div>
          </div>

          {/* Minimal Form */}
          <div className="md:col-span-7">
            {formSubmitted ? (
              <div className="p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-center space-y-2 animate-scaleUp">
                <h4 className="text-sm font-mono text-emerald-400 font-semibold">Message Sent Successfully</h4>
                <p className="text-xs text-[#a1a1aa] font-light">Thank you for reaching out! I will get back to you shortly.</p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Send another message
                </button>
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

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-300 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl font-mono text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-900/10 transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer"
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
