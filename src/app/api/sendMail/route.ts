import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

import Email from '@/email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, message, senderMail } = await req.json();
    console.log({ name, message, senderMail });
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
  } catch (error) {
    return NextResponse.json({ error });
  }
}
