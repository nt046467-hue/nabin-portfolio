import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, projectType, budget, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Name, email, project type, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // If RESEND_API_KEY is configured, send email
    if (process.env.RESEND_API_KEY) {
      const { error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['nt046467@gmail.com'],
        replyTo: email,
        subject: `[Portfolio] ${projectType} inquiry from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Project Type: ${projectType}
Budget: ${budget || 'Not specified'}

Message:
${message}
        `.trim(),
      });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
          { error: 'Failed to send message.' },
          { status: 500 }
        );
      }
    } else {
      // Fallback: log to console when no API key is configured
      console.log('New contact submission:', { name, email, projectType, budget, message });
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
