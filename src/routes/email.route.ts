import { Router } from 'express';
import { sendGmail } from '@/controllers/email.controller';
import emailLimiter from '@/guards/rate-limiter.guard';

const router = Router();

router.use(emailLimiter);

// ./api/email/gmail
router.use('/gmail', sendGmail);

export default router;
