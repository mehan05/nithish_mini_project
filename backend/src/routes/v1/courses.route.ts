import { Router } from 'express';
import { createCourse, getCourseById, listCourses } from '../../controllers/course.controller';
import { uploadCourseMedia } from '../../middlewares/upload';

export const router = Router();

router.post('/create-course', uploadCourseMedia.fields([
  { name: 'thumbnail', maxCount: 1 },
  { name: 'video', maxCount: 1 },
]), createCourse);

router.get('/get-course', listCourses);
router.get('/get-course/:id', getCourseById);




