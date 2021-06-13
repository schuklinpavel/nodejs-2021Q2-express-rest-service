import express, { Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yamljs';

import { log } from './logging/log';
import { processError, logError } from './logging/error';

import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use(log);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// interface CustomRequest extends Request<{ boardId: string }> {} // TS2339

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);

// app.use('/500', (_, __, next: NextFunction) => {
//   throw Error('Oops!');
//   next(); // eslint-disable-line
// });

app.use(logError);
processError();

// PUT IT HERE
// throw Error('Oops!');
// Promise.reject(Error('Oops!'));

export default app;
