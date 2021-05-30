import express from 'express';

import Task from './task.model';
import tasksService from './task.service';

const router = express.Router();

const getBoardId = (url: string): string => url.replace('/boards/', '').replace('/tasks', '');



router.route('/').get(async (_req, res) => {
  const tasks = await tasksService.getAll(); // TS2345 ниже из-за несоот типов, надо as ITask
  res.json(tasks.map(Task.toResponse)); // TS2345
});

router.route('/').post(async (req, res) => {
  const boardId = getBoardId(req.baseUrl);
  const { id, title, order, description, userId, columnId } = req.body;
  // TS2322: Type 'string' is not assignable to type 'null | undefined'. Ошибка возникает на boardId
  const task = await tasksService.postTask(new Task({ boardId, id, title, order, description, userId, columnId }));
  res.status(201);
  res.json(Task.toResponse(task))
});

router.route('/:id').get(async (req, res, next) => {
  const { id } = req.params;
  const task = await tasksService.getById(id);
  if (task) {
    res.status(200);
    res.json(Task.toResponse(task));
  } else {
    res.status(404);
    next();
  }
});

router.route('/:id').put(async (req, res) => {
  // const { boardId, id } = req.params; // TS2339: Property 'boardId' does not exist on type 'RouteParameters"/:id">'.
  const boardId = getBoardId(req.baseUrl);
  const { id } = req.params;
  const { title, order, description, userId, columnId } = req.body;
  const task = await tasksService.putTask({ boardId, id, title, order, description, userId, columnId });
  res.status(200);
  res.json(Task.toResponse(task));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  await tasksService.deleteTask( id );
  res.status(200);
  res.json([]);
});

export default router;
