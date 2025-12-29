import { Router } from 'express';
import { healthCheck, smtpCheck } from '../controllers/health.controller';

const router = Router();

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Health check endpoint
 *     responses:
 *       200:
 *         description: Server is running
 */
router.get('/', healthCheck);

/**
 * @swagger
 * /api/health/smtp:
 *   get:
 *     summary: Checking SMTP status endpoint
 *     responses:
 *       200:
 *         description: SMTP is ready
 *       503:
 *         description: SMTP down
 */
router.get('/smtp', smtpCheck);

export default router;
