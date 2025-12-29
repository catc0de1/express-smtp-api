import express from 'express';
import emailRoute from './email.route';
import healthRoute from './health.route';

const router = express.Router();

router.use('/email', emailRoute);
router.use('/health', healthRoute);

export default router;
