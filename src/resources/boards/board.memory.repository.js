const db = require('../db.js');

const getAll = async () => {
  const all = await db.getAll('BOARDS');
  return all;
}

const getById = async (id) => {
  const board = await db.getById('BOARDS', id);
  return board
};

const postBoard = async (user) => {
  await db.post('BOARDS', user);
  return user;
};

const putBoard = async (item) => {
  const board = db.put('BOARDS', item);
  return board;
}

const deleteBoard = async (id) => {
  await db.delete('BOARDS', id)
}

module.exports = { getAll, getById, postBoard, putBoard, deleteBoard };
