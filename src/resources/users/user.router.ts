import express from 'express';

import User from './user.model';
import usersService from './user.service';

const router = express.Router();

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const { name, login, password } = req.body;
  const user = await usersService.postUser(new User({ name, login, password }));
  res.status(201);
  res.json(User.toResponse(user))
});

router.route('/:id').get(async (req, res, next) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  if (user) {
    res.status(200);
    res.json(User.toResponse(user));
  }
  else next();
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { name, login, password } = req.body;
  const user = await usersService.putUser({ id, name, login, password });
  res.status(200);
  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  await usersService.deleteUser(id);
  res.status(200);
  res.json([]);
});

export default router;
