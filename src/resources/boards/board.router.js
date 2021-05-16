const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res, next) => {
  const boards = await boardsService.getAll();
  if (boards?.length) res.json(boards.map(Board.toResponse));
  else next();
});

router.route('/').post(async (req, res, next) => {
  const { title, columns } = req.body;
  const board = await boardsService.postBoard(new Board({ title, columns }));
  res.status(201);
  res.json(Board.toResponse(board));
  next()
});

router.route('/:id').get(async (req, res, next) => {
  const { id } = req.params;
  const board = await boardsService.getById(id);
  if (board) res.json(Board.toResponse(board));
  else next();
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { title, columns } = req.body;
  const board = await boardsService.putBoard({ id, title, columns });
  res.status(200);
  res.json(Board.toResponse(board));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  await boardsService.deleteBoard(id);
  res.status(200);
  res.json([]);
});

module.exports = router;
