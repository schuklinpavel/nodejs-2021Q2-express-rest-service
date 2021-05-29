const db = require('../db.js');

/**
 * Function call - Get All entity from target table
 * @returns {Promise<Board[]>}
 */
const getAll = async () => {
  const all = await db.getAll('BOARDS');
  return all;
}

/**
 * Function call - Get entity by id
 * @param {string} id
 * @returns {Promise<Board>} entity
 */
const getById = async (id) => {
  const board = await db.getById('BOARDS', id);
  return board
};

/**
 * Function call - Add entity to table
 * @param {Board} item entity
 * @returns {Promise<Board>} entity
 */
const postBoard = async (item) => {
  await db.post('BOARDS', item);
  return item;
};

/**
 * Function call - Update entity in table
 * @param {Board} item entity
 * @returns {Promise<Board>} entity
 */
const putBoard = async (item) => {
  const board = db.put('BOARDS', item);
  return board;
}

/**
 * Function call - Remove entity by id
 * @param {string} id entity
 * @returns {Promise<void>}
 */
const deleteBoard = async (id) => {
  await db.delete('BOARDS', id)
}

module.exports = { getAll, getById, postBoard, putBoard, deleteBoard };
