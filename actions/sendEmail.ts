'use server';

import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMessage, validateString } from '@/lib/utils';
import { createElement } from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type SendEmailResult =
  | { ok: true }
  | { ok: false; error: string };

export const sendEmail = async (formData: FormData): Promise<SendEmailResult> => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }
  if (!validateString(message, 5000)) {
    return { ok: false, error: 'Message must be between 1 and 5000 characters.' };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'prsthibha@gmail.com',
      replyTo: senderEmail as string,
      subject: 'New message from portfolio',
      react: createElement(ContactFormEmail, {
        senderEmail: senderEmail as string,
        message: message as string,
      }),
    });
    return { ok: true };
  } catch (error: unknown) {
    return { ok: false, error: getErrorMessage(error) };
  }
};
