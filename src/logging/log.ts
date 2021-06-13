import { NextFunction, Request, Response } from 'express';
import { finished } from 'stream';

import { logging } from './logging';

export const log = (req: Request, res: Response, next: NextFunction) => {
  finished(res, () => {
    const { method, url, query, body } = req;
    const { statusCode } = res;
    logging(`${method} ${url} ${JSON.stringify(query)} ${JSON.stringify(body)} ${statusCode}`);
  })
  next();
};
