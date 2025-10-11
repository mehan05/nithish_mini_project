import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadsRoot = path.join(process.cwd(), 'uploads');
const videosDir = path.join(uploadsRoot, 'videos');
const imagesDir = path.join(uploadsRoot, 'images');
fs.mkdirSync(videosDir, { recursive: true });
fs.mkdirSync(imagesDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, file, cb) => {
    if (file.mimetype.startsWith('video/')) return cb(null, videosDir);
    if (file.mimetype.startsWith('image/')) return cb(null, imagesDir);
    // Fallback destination; actual rejection happens in fileFilter
    return cb(null, uploadsRoot);
  },
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${unique}${ext}`);
  },
});

function fileFilter(_req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) {
  if (file.mimetype.startsWith('video/') || file.mimetype.startsWith('image/')) return cb(null, true);
  return cb(null, false);
}

export const uploadCourseMedia = multer({ storage, fileFilter, limits: { fileSize: 200 * 1024 * 1024 } });


