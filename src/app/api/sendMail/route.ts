import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { RateLimiterMemory, RateLimiterRes } from 'rate-limiter-flexible';

import Email from '@/email';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiter to prevent spam and abuse
const rateLimiter = new RateLimiterMemory({
  points: 5, // Max 5 requests
  duration: 15 * 60, // Per 15 minutes
});

export async function POST(req: NextRequest) {
  try {
    // Get client IP (or a fallback if not behind a proxy)
    const ip = req.headers.get('x-forwarded-for') || req.ip || 'unknown';

    // Consume a rate limit point
    await rateLimiter.consume(ip);

    const { name, message, senderMail, honeyPot } = await req.json();

    // Check honeypot field
    if (honeyPot) {
      console.error('Spam detected');
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'contact@stefanheyd.fr',
      to: `contact@stefanheyd.com`,
      subject: `You have a new message from ${senderMail}`,

      react: Email({
        name,
        message,
        senderMail,
      }),
    });

    return NextResponse.json(data);
  } catch (err) {
    if (err instanceof RateLimiterRes) {
      // Handle rate limit exceeded error
      console.warn('Rate limit exceeded', { retryIn: err.msBeforeNext });
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 },
      );
    }

    // Log other unexpected errors
    console.error('Unexpected error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 },
    );
  }
}
