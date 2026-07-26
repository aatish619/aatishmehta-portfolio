'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
  AlertCircle,
  Loader2,
} from 'lucide-react';
import type { ElementType } from 'react';
import { siteConfig } from '@/config/site';
import { contactSchema, ContactInput } from '@/types/contact-schema';

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
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      honeypot: '',
    },
  });

  const isSubmitting = formState === 'sending';

  async function onSubmit(data: ContactInput) {
    setFormState('sending');
    setReferenceId(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setReferenceId(result.referenceId || null);
        setFormState('success');
        reset();
      } else {
        setFormState('error');
      }
    } catch (error) {
      console.error('[Contact Form] Network or unexpected submission error:', error);
      setFormState('error');
    }
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

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {/* Honeypot Spam Protection Field - Completely Hidden */}
            <input
              type="text"
              {...register('honeypot')}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Custom Status Toasts / Banners */}
            {formState === 'success' && (
              <div className="flex gap-3 rounded-lg border border-success/30 bg-success/10 p-4 text-sm text-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                <div>
                  <Text size="sm" className="font-semibold text-success">
                    Message sent successfully!
                  </Text>
                  {referenceId && (
                    <Text size="sm" className="font-mono mt-1 font-semibold text-foreground">
                      Reference ID: {referenceId}
                    </Text>
                  )}
                  <Text size="sm" color="muted" className="mt-1">
                    Thank you for reaching out. A confirmation email has also been sent to your inbox. I&apos;ll get back to you as soon as possible.
                  </Text>
                </div>
              </div>
            )}

            {formState === 'error' && (
              <div className="flex gap-3 rounded-lg border border-error/30 bg-error/10 p-4 text-sm text-foreground">
                <AlertCircle className="h-5 w-5 shrink-0 text-error" />
                <div>
                  <Text size="sm" className="font-semibold text-error">
                    Unable to send your message.
                  </Text>
                  <Text size="sm" color="muted" className="mt-1">
                    Please try again later.
                  </Text>
                </div>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name <span className="text-error">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  disabled={isSubmitting}
                  placeholder="Your Name"
                  {...register('name')}
                  className="w-full rounded-lg border border-border/50 bg-surface/40 px-4 py-2.5 text-sm text-foreground outline-none backdrop-blur-sm transition-all placeholder:text-muted focus:border-primary focus:bg-surface focus:ring-1 focus:ring-primary disabled:opacity-50"
                />
                {errors.name && (
                  <span className="text-xs text-error mt-0.5">{errors.name.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email <span className="text-error">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  disabled={isSubmitting}
                  placeholder="you@example.com"
                  {...register('email')}
                  className="w-full rounded-lg border border-border/50 bg-surface/40 px-4 py-2.5 text-sm text-foreground outline-none backdrop-blur-sm transition-all placeholder:text-muted focus:border-primary focus:bg-surface focus:ring-1 focus:ring-primary disabled:opacity-50"
                />
                {errors.email && (
                  <span className="text-xs text-error mt-0.5">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Subject <span className="text-error">*</span>
              </label>
              <input
                id="subject"
                type="text"
                disabled={isSubmitting}
                placeholder="What's this about?"
                {...register('subject')}
                className="w-full rounded-lg border border-border/50 bg-surface/40 px-4 py-2.5 text-sm text-foreground outline-none backdrop-blur-sm transition-all placeholder:text-muted focus:border-primary focus:bg-surface focus:ring-1 focus:ring-primary disabled:opacity-50"
              />
              {errors.subject && (
                <span className="text-xs text-error mt-0.5">{errors.subject.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message <span className="text-error">*</span>
              </label>
              <textarea
                id="message"
                disabled={isSubmitting}
                rows={5}
                placeholder="Tell me about your project, role, or idea…"
                {...register('message')}
                className="w-full resize-y rounded-lg border border-border/50 bg-surface/40 px-4 py-3 text-sm text-foreground outline-none backdrop-blur-sm transition-all placeholder:text-muted focus:border-primary focus:bg-surface focus:ring-1 focus:ring-primary disabled:opacity-50"
              />
              {errors.message && (
                <span className="text-xs text-error mt-0.5">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary-hover hover:shadow-glow active:scale-[0.98] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span>Sending...</span>
                  <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
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
