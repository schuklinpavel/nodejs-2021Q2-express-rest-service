const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const getById = (id) => boardsRepo.getById(id)
const postBoard = async (board) => boardsRepo.postBoard(board);
const putBoard = async (board) => boardsRepo.putBoard(board);
const deleteBoard = async (id) => boardsRepo.deleteBoard(id);

module.exports = { getAll, getById, postBoard, putBoard, deleteBoard };
