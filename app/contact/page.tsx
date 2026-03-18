'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { personalInfo } from '@/lib/data';
import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-[#111111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-[#f5f0e8] placeholder-[#57534e] focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition';

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <PageHeader
          label="// contact"
          title="Get in Touch"
          description="Have a project, idea, or collaboration in mind? My inbox is always open."
        />

        <div className="grid md:grid-cols-5 gap-8 md:gap-10">
          {/* Left: info */}
          <AnimatedSection className="md:col-span-2 space-y-6" direction="left">
            <div className="glass-card p-5 sm:p-6 space-y-5">
              <h3 className="font-display text-lg font-semibold mb-4">Contact Details</h3>
              {[
                { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-start gap-3.5 group">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 group-hover:bg-amber-500/20 transition">
                    <Icon size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-[#57534e] font-mono">{label}</p>
                    <p className="text-sm text-[#a8a29e] group-hover:text-amber-400 transition break-all">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="glass-card p-5 sm:p-6">
              <h3 className="font-display text-base font-semibold mb-4">Find Me Online</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { href: personalInfo.github, Icon: Github, label: 'GitHub' },
                  { href: personalInfo.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                ].map(({ href, Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-3 rounded-lg border border-[#2a2a2a] hover:border-amber-500/40 hover:bg-amber-500/5 transition group">
                    <Icon size={18} className="text-[#57534e] group-hover:text-amber-400 transition" />
                    <span className="text-xs text-[#57534e] group-hover:text-amber-400 transition">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-5 border-l-2 border-l-amber-500">
              <p className="text-sm font-medium text-[#f5f0e8] mb-1">Response Time</p>
              <p className="text-sm text-[#a8a29e]">
                I typically respond within <span className="text-amber-400">24–48 hours</span>. Email is the fastest way to reach me.
              </p>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection className="md:col-span-3" direction="right" delay={0.15}>
            <div className="glass-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#57534e] mb-2">Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#57534e] mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#57534e] mb-2">Subject *</label>
                  <input
                    required
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#57534e] mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell me about your project, idea, or question..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-2.5 p-3.5 rounded-lg bg-green-400/10 border border-green-400/20 text-green-400 text-sm">
                    <CheckCircle size={15} />
                    Message sent! I&apos;ll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2.5 p-3.5 rounded-lg bg-red-400/10 border border-red-400/20 text-red-400 text-sm">
                    <AlertCircle size={15} />
                    Something went wrong. Please email me directly at{' '}
                    <a href={`mailto:${personalInfo.email}`} className="underline">{personalInfo.email}</a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {status === 'loading' ? (
                    <><Loader2 size={15} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
