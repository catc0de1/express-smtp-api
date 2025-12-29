import transporter from '@/config/mailer';
import type { Request, Response } from 'express';

export function healthCheck(req: Request, res: Response) {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
  });
}

export async function smtpCheck(req: Request, res: Response) {
  try {
    await transporter.verify();
    res.json({ smtp: 'ok' });
  } catch {
    res.status(503).json({ smtp: 'down' });
  }
}
