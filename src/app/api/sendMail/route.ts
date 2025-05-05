import { NextRequest, NextResponse } from 'next/server';
import { RateLimiterMemory, RateLimiterRes } from 'rate-limiter-flexible';
import { Resend } from 'resend';

import Email from '@/email';

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 15 * 60,
});

export async function POST(request: NextRequest) {
  try {
    console.log('Starting email submission process');

    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      request.headers.get('cf-connecting-ip') ||
      'unknown';

    console.log('Client IP:', ip);

    await rateLimiter.consume(ip);

    const body = await request.json();
    console.log('Received form data:', { ...body, honeyPot: undefined });

    const { name, message, senderMail, honeyPot } = body;

    if (!name || !message || !senderMail) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    if (honeyPot) {
      console.warn('Spam detected');
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    console.log('Attempting to send email via Resend');

    try {
      const data = await resend.emails.send({
        from: 'contact@stefanheyd.fr',
        to: 'contact@stefanheyd.com',
        subject: `You have a new message from ${senderMail}`,
        react: Email({
          name,
          message,
          senderMail,
        }),
      });

      console.log('Email sent successfully:', data);
      return NextResponse.json(data);
    } catch (emailError) {
      console.error('Resend API error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 },
      );
    }
  } catch (error) {
    if (error instanceof RateLimiterRes) {
      console.warn('Rate limit exceeded', { retryIn: error.msBeforeNext });
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 },
      );
    }

    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 },
    );
  }
}
