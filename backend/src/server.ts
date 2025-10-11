
import { createApp } from './app';
import { env } from './config/env';
import { connectToDatabase } from './config/db';

async function bootstrap() {
  try {
    await connectToDatabase();
    const app = createApp();
    app.listen(env.PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is running on port ${env.PORT}`);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

bootstrap();