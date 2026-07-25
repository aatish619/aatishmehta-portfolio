'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Globe,
  MessageSquare,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import type { ElementType, FormEvent } from 'react';
import { siteConfig } from '@/config/site';

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.author.email,
    href: `mailto:${siteConfig.author.email}`,
    description: 'Best for project inquiries',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7383667590',
    href: 'tel:+917383667590',
    description: 'Mon–Sat, 10:00–19:00 IST',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    href: null,
    description: 'Open to remote & hybrid',
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Open to opportunities',
    href: null,
    description: 'Response within 24 hours',
  },
];

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('sending');
    // Compose a mailto fallback so the form works without a backend.
    const body = `Hi Aatish,%0A%0AMy name is ${encodeURIComponent(
      form.name
    )} (${encodeURIComponent(form.email)}).%0A%0A${encodeURIComponent(form.message)}`;
    const mailto = `mailto:${siteConfig.author.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio inquiry'
    )}&body=${body}`;
    window.location.href = mailto;
    setTimeout(() => setFormState('sent'), 600);
  }

  return (
    <div className="mx-auto max-w-5xl py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <Text
          size="sm"
          color="primary"
          className="mb-3 font-semibold uppercase tracking-widest"
        >
          Get in Touch
        </Text>
        <Heading size="display" className="mb-4 tracking-tight">
          Let&apos;s build something great.
        </Heading>
        <Text size="lg" color="muted" className="max-w-2xl mx-auto text-balance">
          Whether you have a question, a project proposition, or just want to say hi,
          my inbox is always open.
        </Text>
      </div>

      {/* Quick contact cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {CONTACT_DETAILS.map((item) => {
          const Wrapper: ElementType = item.href ? 'a' : 'div';
          const wrapperProps = item.href
            ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
            : {};
          return (
            <Wrapper
              key={item.label}
              {...wrapperProps}
              className="group rounded-2xl border border-border/50 bg-card/40 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-card/70 hover:shadow-glow"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <item.icon className="h-5 w-5" />
              </div>
              <Text size="sm" className="font-semibold uppercase tracking-wider text-muted">
                {item.label}
              </Text>
              <Text className="mt-1 font-medium text-foreground break-all">
                {item.value}
              </Text>
              <Text size="caption" color="muted" className="mt-1">
                {item.description}
              </Text>
            </Wrapper>
          );
        })}
      </div>

      {/* Two-column: form + sidebar */}
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <GlassCard className="p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <Heading size="h4">Send a message</Heading>
              <Text size="sm" color="muted">
                I&apos;ll get back to you within 24 hours.
              </Text>
            </div>
          </div>

          {formState === 'sent' ? (
            <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <Heading size="h4">Message ready to send</Heading>
              <Text color="muted">
                Your email client should have opened. If not, email me directly at{' '}
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.author.email}
                </a>
                .
              </Text>
              <button
                onClick={() => {
                  setFormState('idle');
                  setForm({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-2 text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Your name"
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  required
                  placeholder="Jane Doe"
                />
                <Field
                  id="email"
                  type="email"
                  label="Email"
                  value={form.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                  required
                  placeholder="you@example.com"
                />
              </div>
              <Field
                id="subject"
                label="Subject"
                value={form.subject}
                onChange={(v) => setForm((f) => ({ ...f, subject: v }))}
                placeholder="What's this about?"
              />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message <span className="text-error">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project, role, or idea…"
                  className="w-full resize-y rounded-lg border border-border/50 bg-surface/40 px-4 py-3 text-sm text-foreground outline-none backdrop-blur-sm transition-all placeholder:text-muted focus:border-primary focus:bg-surface focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                disabled={formState === 'sending'}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary-hover hover:shadow-glow active:scale-[0.98] disabled:opacity-50"
              >
                {formState === 'sending' ? 'Opening email…' : 'Send message'}
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </GlassCard>

        {/* Sidebar */}
        <GlassCard className="flex flex-col gap-6 p-6 md:p-8">
          <div>
            <Text size="sm" className="mb-2 font-semibold uppercase tracking-wider text-muted">
              Connect
            </Text>
            <Heading size="h4">Find me online</Heading>
          </div>
          <div className="flex flex-col gap-3">
            <SocialLink
              icon={<Globe className="h-5 w-5" />}
              label="LinkedIn"
              handle="@aatishmehta17"
              href={siteConfig.author.linkedin}
            />
            <SocialLink
              icon={<Globe className="h-5 w-5" />}
              label="GitHub"
              handle="@aatish619"
              href={siteConfig.author.github}
            />
            <SocialLink
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              handle={siteConfig.author.email}
              href={`mailto:${siteConfig.author.email}`}
            />
          </div>

          <div className="mt-2 rounded-xl border border-border/40 bg-surface/30 p-4">
            <Text size="sm" className="font-semibold text-foreground">
              Prefer a call?
            </Text>
            <Text size="sm" color="muted" className="mt-1 leading-relaxed">
              Drop me a message with a few time slots and I&apos;ll set up a Google
              Meet or phone call.
            </Text>
            <a
              href={`tel:+917383667590`}
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Phone className="h-4 w-4" /> +91 7383667590
            </a>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border/50 bg-surface/40 px-4 py-2.5 text-sm text-foreground outline-none backdrop-blur-sm transition-all placeholder:text-muted focus:border-primary focus:bg-surface focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}

function SocialLink({
  icon,
  label,
  handle,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  handle: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-border/40 bg-surface/30 p-3 transition-all duration-300 hover:border-primary/40 hover:bg-surface/60"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        {icon}
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        <span className="truncate text-xs text-muted">{handle}</span>
      </div>
    </a>
  );
}
