import transporter from '@/config/mailer';
import renderTemplate from '@/config/renderTemplate';
import { GmailSchema } from '@/schemas/emailSchema';

import type { Request, Response } from 'express';

export const sendGmail = async (req: Request, res: Response) => {
  const parseResult = GmailSchema.safeParse(req.body);

  if (!parseResult.success) {
    const errorMessages = parseResult.error.issues.map(issue => ({
      field: issue.path[0],
      message: issue.message,
    }));
    res.status(400).json({ success: false, error: errorMessages });
    return;
  }

  const { user_name_sender, user_email_sender, message, user_name_receiver, user_email_receiver } = parseResult.data;

  try {
    const htmlContent = renderTemplate('emailTemplate', {
      public: true,
      user_name_sender,
      user_email_sender,
      message,
      user_name_receiver,
      user_email_receiver,
    });

    await transporter.sendMail({
      from: `"${user_name_sender}" <${user_email_sender}>`,
      to: user_email_receiver,
      subject: `Hello ${user_name_receiver}, you have message from ${user_name_sender}`,
      html: htmlContent,
      replyTo: user_email_sender,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send failed: ', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
};
