import IBoard from './board.model';
import db from '../db';

/**
 * Function call - Get All entity from target table
 * @returns {Promise<Board[]>}
 */
const getAll = async () => {
  const all = await db.getAll('BOARDS');
  return all as IBoard[];
}

/**
 * Function call - Get entity by id
 * @param {string} id
 * @returns {Promise<Board>} entity
 */
const getById = async (id: string) => {
  const board = await db.getById('BOARDS', id);
  return board as IBoard;
};

/**
 * Function call - Add entity to table
 * @param {Board} item entity
 * @returns {Promise<Board>} entity
 */
const postBoard = async (item: IBoard) => {
  await db.post('BOARDS', item);
  return item;
};

/**
 * Function call - Update entity in table
 * @param {Board} item entity
 * @returns {Promise<Board>} entity
 */
const putBoard = async (item: IBoard) => {
  const board = db.put('BOARDS', item);
  return board as IBoard;
}

/**
 * Function call - Remove entity by id
 * @param {string} id entity
 * @returns {Promise<void>}
 */
const deleteBoard = async (id: string) => {
  await db.delete('BOARDS', id)
}

export default { getAll, getById, postBoard, putBoard, deleteBoard };
