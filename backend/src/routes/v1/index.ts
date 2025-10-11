import { Router } from 'express';
import { router as healthRouter } from './health.route';
import { router as coursesRouter } from './courses.route';

export const router = Router();

router.use('/health', healthRouter);
router.use('/courses', coursesRouter);


