import { NextFunction, Request, Response } from 'express';
import { loggingError } from './logging';

export const processError = () => {
  process.on('uncaughtException', (error) => {
    loggingError(`captured error: ${error.message}`);
    process.exit(1);
  });

  process.on('unhandledRejection', (reason: { message: string }) => {
    loggingError(`Unhandled rejection detected: ${reason.message}`);
    process.exit(2);
  });
}

export const logError = (err: Error, _: Request, res: Response, next: NextFunction) => {
  loggingError(err.message);
  res.status(500).send('Internal Server Error');
  next();
};
