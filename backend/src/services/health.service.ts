import os from 'os';

export async function getHealthStatus() {
  return {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
    hostname: os.hostname(),
  } as const;
}


