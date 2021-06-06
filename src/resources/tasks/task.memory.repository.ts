import ITask from './task.model';
import db from '../db';

/**
 * Function call - Get All entity from target table
 * @returns {Promise<Task[]>}
 */
const getAll = async () => {
  const all = await db.getAll('TASKS');
  return all as ITask[]; // исправление TS2345
}

/**
 * Function call - Get entity by id
 * @param {string} id
 * @returns {Promise<Task>} entity
 */
const getById = async (id: string) => {
  const task = await db.getById('TASKS', id);
  return task as ITask;
};

/**
 * Function call - Add entity to table
 * @param {Task} item entity
 * @returns {Promise<Task>}
 */
const postTask = async (item: ITask) => {
  await db.post('TASKS', item);
  return item;
};

/**
 * Function call - Update entity in table
 * @param {Task} item entity
 * @returns {Promise<Task>} entity
 */
const putTask = async (item: ITask) => {
  const task = await db.put('TASKS', item)
  return task as ITask;
}

/**
 * Function call - Remove entity by id
 * @param {string} id entity
 * @returns {Promise<void>} entity
 */
const deleteTask = async (id: string) => {
  await db.delete('TASKS', id)
}

export default { getAll, getById, postTask, putTask, deleteTask };
