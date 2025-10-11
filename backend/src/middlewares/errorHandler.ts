import { NextFunction, Request, Response } from 'express';

type ErrorWithStatus = Error & { status?: number; code?: string };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: ErrorWithStatus, _req: Request, res: Response, _next: NextFunction) {
  const status = err.status ?? 500;
  const responseBody = {
    success: false,
    message: err.message || 'Internal Server Error',
    code: err.code,
  };
  res.status(status).json(responseBody);
}


