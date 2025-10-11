import mongoose from 'mongoose';
import { env } from './env';

export async function connectToDatabase(): Promise<void> {
  if (mongoose.connection.readyState === 1) return; // already connected
  try {
      await mongoose.connect("mongodb+srv://mehan:123@cluster0.kajj6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("DB connected");
        
  } catch (error) {
        console.log(error);
        
  }
//   await mongoose.connect(env.MONGO_URI);
}


