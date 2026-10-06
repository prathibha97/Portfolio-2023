'use client';

import { sendEmail } from '@/actions/sendEmail';
import { profile } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useRef, useState, useTransition } from 'react';
import { toast } from 'react-hot-toast';

const field =
  'w-full border border-[var(--color-ink-3)] bg-transparent px-3.5 py-3 text-[0.9375rem] placeholder:text-[var(--color-ink-3)] outline-none transition-colors focus:border-[var(--color-ink)]';

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  useSectionInView('Contact', 0.4, containerRef);

  const [pending, startTransition] = useTransition();
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await sendEmail(formData);
      if (!result.ok) {
        toast.error(result.error);
        return;
      }
      setSent(true);
      formRef.current?.reset();
    });
  };

  return (
    <section id="contact" ref={containerRef} className="section scroll-mt-14">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-x-6 border-t border-[var(--color-rule-strong)] pt-6">
          <h2 className="t-meta col-span-12 mb-8 md:col-span-2 md:mb-0 md:self-start md:sticky md:top-20">Contact</h2>

          <div className="col-span-12 md:col-span-10">
            <p className="display t-h2 max-w-[16ch]">Tell me what you&rsquo;re building.</p>

            <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-14">
              <div className="col-span-12 lg:col-span-5">
                <p className="t-body text-[var(--color-ink-2)]">
                  I&rsquo;m looking for my next engineering role and I take freelance work
                  alongside my current job &mdash; full-stack products, Go services, or a short
                  focused sprint. A paragraph about the problem gets a faster answer than a brief.
                </p>

                <p className="display mt-8 text-[clamp(1.25rem,2.6vw,2rem)]">
                  <a className="link-rule" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </p>

                {/* Rows, not columns — this sits in a 5-of-12 well, which is
                    too narrow to set three labelled values side by side. */}
                <dl className="mt-10 divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
                  {[
                    { term: 'Working style', value: profile.workingStyle },
                    { term: 'Relocation', value: 'Open to it' },
                    { term: 'Timezone', value: profile.timezone, tabular: true },
                  ].map((row) => (
                    <div key={row.term} className="grid grid-cols-12 gap-x-4 py-3">
                      <dt className="t-meta col-span-5">{row.term}</dt>
                      <dd className={`col-span-7 text-[0.9375rem]${row.tabular ? ' tabular' : ''}`}>
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                {sent ? (
                  <div className="border-t border-[var(--color-ink)] pt-6">
                    <p className="display t-h3">Sent.</p>
                    <p className="t-body mt-2 text-[var(--color-ink-2)]">
                      I read everything and reply within a day or two.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="link-rule mt-6 text-[0.9375rem] text-[var(--color-mark)]"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} action={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <label htmlFor="senderEmail" className="t-meta mb-2 block">
                        Your email
                      </label>
                      <input
                        id="senderEmail"
                        name="senderEmail"
                        type="email"
                        required
                        maxLength={500}
                        placeholder="you@company.com"
                        className={field}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="t-meta mb-2 block">
                        What are you building?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        maxLength={5000}
                        rows={8}
                        placeholder="The problem, the stack, and roughly when you need it."
                        className={`${field} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={pending}
                      className="self-start bg-[var(--color-ink)] px-6 py-3 text-[0.9375rem] text-[var(--color-paper)] transition-opacity hover:opacity-85 disabled:opacity-60"
                    >
                      {pending ? 'Sending…' : 'Send message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
