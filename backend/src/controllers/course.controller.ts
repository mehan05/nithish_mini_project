import { Request, Response, NextFunction } from 'express';
import { Course } from '../models/course.model';
import { BASE_API } from '../config';

export async function createCourse(req: Request, res: Response, next: NextFunction) {
  try {
    console.log("create course called");

    // Extract course info from request body
    const { title, traineeName, description, youtubeLinks } = req.body as Record<string, any>;

    // Handle uploaded files (thumbnail and video)
    const anyReq = req as unknown as { files?: Record<string, Express.Multer.File[]>; file?: Express.Multer.File };
    const thumbnailFile = anyReq.files && anyReq.files['thumbnail'] ? anyReq.files['thumbnail'][0] : undefined;
    const videoFile = anyReq.files && anyReq.files['video'] ? anyReq.files['video'][0] : req.file;

    const imageUrl = thumbnailFile ? `/uploads/images/${thumbnailFile.filename}` : undefined;
    const videoPath = videoFile ? `/uploads/videos/${videoFile.filename}` : undefined;

    // Create course document including YouTube links
    const course = await Course.create({
      title,
      traineeName,
      description,
      imageUrl,
      videoPath,
      youtubeUrls: youtubeLinks ? JSON.parse(youtubeLinks) : [] // ✅ store array
    });

    const base = BASE_API;
    const data = {
      ...course.toObject(),
      imageUrl: imageUrl ? `${base}${imageUrl}` : undefined,
      videoUrl: videoPath ? `${base}${videoPath}` : undefined,
    };

    res.status(201).json({ success: true, data });
  } catch (err) {
    console.log(err);
    next(err);
  }
}


export async function getCourseById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params as { id: string };
    const course = await Course.findById(id).lean();
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });
    const base = `${req.protocol}://${req.get('host')}`;
    const data = {
      ...course,
      imageUrl: course.imageUrl ? `${base}${course.imageUrl}` : undefined,
      videoUrl: course.videoPath ? `${base}${course.videoPath}` : undefined,
    };
    return res.json({ success: true, data });
  } catch (err) {
    return next(err);
  }
}

export async function listCourses(_req: Request, res: Response, next: NextFunction) {
  try {
    const courses = await Course.find().sort({ createdAt: -1 }).lean();
    const base = `${res.req?.protocol}://${res.req?.get('host')}`;
    const data = courses.map((c) => ({
      ...c,
      imageUrl: c.imageUrl ? `${base}${c.imageUrl}` : undefined,
      videoUrl: c.videoPath ? `${base}${c.videoPath}` : undefined,
    }));
    return res.json({ success: true, data });
  } catch (err) {
    return next(err);
  }
}


