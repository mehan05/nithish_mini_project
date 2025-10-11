import mongoose, { Schema, Document, Model } from 'mongoose';

export interface CourseDocument extends Document {
  title: string;
  traineeName: string;
  description?: string;
  imageUrl?: string;
  videoPath?: string; // local file path
  createdAt: Date;
  updatedAt: Date;
  youtubeUrls?:string[]
}

const courseSchema = new Schema<CourseDocument>(
  {
    title: { type: String, required: true, trim: true },
    traineeName: { type: String, required: true, trim: true },
    description: { type: String },
    imageUrl: { type: String },
    videoPath: { type: String },
    youtubeUrls:{
      type:[String],
      default:[]
    }
  },
  { timestamps: true }
);

export const Course: Model<CourseDocument> =
  mongoose.models.Course || mongoose.model<CourseDocument>('Course', courseSchema);


