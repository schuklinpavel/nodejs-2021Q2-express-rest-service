const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

const getBoardId = (url) => url.replace('/boards/', '').replace('/tasks', '');

router.route('/').get(async (req, res) => {
  const boardId = getBoardId(req.baseUrl);
  const tasks = await tasksService.getAll(boardId);
  res.json(tasks.map(Task.toResponse));
});

router.route('/').post(async (req, res) => {
  const boardId = getBoardId(req.baseUrl);
  const { id, title, order, description, userId, columnId } = req.body;
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
  const { boardId, id } = req.params;
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

module.exports = router;
