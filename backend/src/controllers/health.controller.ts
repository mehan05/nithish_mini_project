import { Request, Response } from 'express';
import { getHealthStatus } from '../services/health.service';

export async function getHealth(_req: Request, res: Response) {
  const status = await getHealthStatus();
  res.json({ success: true, data: status });
}


