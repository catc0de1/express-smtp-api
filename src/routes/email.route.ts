import { Router } from 'express';
import { sendGmail } from '@/controllers/email.controller';
import emailLimiter from '@/guards/rate-limiter.guard';

const router = Router();

router.use(emailLimiter);

/**
 * @swagger
 * /api/email/gmail:
 *   post:
 *     summary: Send an email with Gmail SMTP
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name_sender:
 *                 type: string
 *               user_email_sender:
 *                 type: string
 *               message:
 *                 type: string
 *               user_name_receiver:
 *                 type: string
 *               user_email_receiver:
 *                 type: string
 *     responses:
 *       200:
 *         description: Email sent successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Failed to send email
 */
router.use('/gmail', sendGmail);

export default router;
