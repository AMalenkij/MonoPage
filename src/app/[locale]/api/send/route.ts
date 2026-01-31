import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'LegalFox <contact@legalfox.pl>',
      to: ['juliia.redfox@gmail.com'],
      subject: 'New Contact Form Submission',
      react: EmailTemplate({ name, phone, message }),
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}