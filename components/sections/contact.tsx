'use client';

import { sendEmail } from '@/actions/sendEmail';
import { profile } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useRef, useState, useTransition } from 'react';
import { toast } from 'react-hot-toast';
import Magnetic from '../primitives/magnetic';
import Reveal from '../primitives/reveal';
import SectionHeading from '../primitives/section-heading';

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  useSectionInView('Contact', 0.4, containerRef);

  const [pending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await sendEmail(formData);
      if (!result.ok) {
        toast.error(result.error, {
          style: {
            background: '#131418',
            color: '#ededee',
            border: '1px solid rgba(255,255,255,0.08)',
          },
        });
        return;
      }
      toast.success('Sent. I’ll get back to you soon.', {
        style: {
          background: '#131418',
          color: '#ededee',
          border: '1px solid rgba(245,177,61,0.4)',
        },
        iconTheme: { primary: '#f5b13d', secondary: '#08090b' },
      });
      setSuccess(true);
      formRef.current?.reset();
      setTimeout(() => setSuccess(false), 5000);
    });
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-32 md:py-44 scroll-mt-24"
    >
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left: pitch */}
          <div className="lg:col-span-6">
            <SectionHeading
              index="06"
              eyebrow="Contact"
              title="Let's build the thing you've been describing in meetings."
              description="I'm open to senior engineering roles in 2026 and actively take freelance / contract work alongside my current role — full-stack web products, Go services, or a focused engineering sprint. The fastest path to me is a one-paragraph email."
            />

            <Reveal delay={0.2} className="mt-12">
              <div className="space-y-6">
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor="link"
                  className="group inline-flex items-baseline gap-3"
                >
                  <span className="label-eyebrow">Email</span>
                  <span className="font-display text-2xl md:text-3xl text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors">
                    {profile.email}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-[var(--color-fg-subtle)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <div className="flex flex-wrap gap-3 pt-3">
                  <Magnetic strength={0.25}>
                    <a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
                    >
                      LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.25}>
                    <a
                      href={profile.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
                    >
                      GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </Magnetic>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <div className="label-eyebrow">Based in</div>
                    <div className="mt-1 text-[var(--color-fg)]">{profile.location}</div>
                  </div>
                  <div>
                    <div className="label-eyebrow">Timezone</div>
                    <div className="mt-1 text-[var(--color-fg)]">{profile.timezone}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <div className="relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 p-6 md:p-10 backdrop-blur-sm overflow-hidden grain">
                <AnimatePresence mode="wait">
                  {success ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/40">
                        <Send className="h-7 w-7 text-[var(--color-accent)]" strokeWidth={1.5} />
                      </div>
                      <h3 className="mt-6 font-display text-3xl text-[var(--color-fg)]">
                        Message in flight.
                      </h3>
                      <p className="mt-2 text-[var(--color-fg-muted)] max-w-xs">
                        I&apos;ll get back to you within 1–2 business days.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      ref={formRef}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      action={handleSubmit}
                      className="flex flex-col gap-5"
                    >
                      <div className="flex flex-col gap-2">
                        <label htmlFor="senderEmail" className="label-eyebrow">
                          Your email
                        </label>
                        <input
                          id="senderEmail"
                          name="senderEmail"
                          type="email"
                          required
                          maxLength={500}
                          placeholder="you@company.com"
                          className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-2)] px-4 py-3.5 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] outline-none transition-colors focus:border-[var(--color-accent)]"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="label-eyebrow">
                          What are you building?
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          maxLength={5000}
                          rows={7}
                          placeholder="Tell me about the project, the stack, and the timeline."
                          className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-2)] px-4 py-3.5 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] outline-none transition-colors focus:border-[var(--color-accent)] resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={pending}
                        data-cursor="link"
                        className={cn(
                          'group relative mt-2 flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 text-sm font-medium text-[var(--color-bg)] transition-all hover:bg-[var(--color-accent-soft)] disabled:opacity-70',
                          pending && 'cursor-wait'
                        )}
                      >
                        {pending ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--color-bg)]/40 border-t-[var(--color-bg)]" />
                            Sending
                          </>
                        ) : (
                          <>
                            Send message
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
