const db = require('../db.js');

/**
 * Function call - Get All entity from target table
 * @returns {Promise<Task[]>}
 */
const getAll = async () => {
  const all = await db.getAll('TASKS');
  return all;
}

/**
 * Function call - Get entity by id
 * @param {string} id
 * @returns {Promise<Task>} entity
 */
const getById = async (id) => {
  const task = await db.getById('TASKS', id);
  return task;
};

/**
 * Function call - Add entity to table
 * @param {Task} item entity
 * @returns {Promise<Task>}
 */
const postTask = async (item) => {
  await db.post('TASKS', item);
  return item;
};

/**
 * Function call - Update entity in table
 * @param {Task} item entity
 * @returns {Promise<Task>} entity
 */
const putTask = async (item) => {
  const task = await db.put('TASKS', item)
  return task;
}

/**
 * Function call - Remove entity by id
 * @param {string} id entity
 * @returns {Promise<void>} entity
 */
const deleteTask = async (id) => {
  await db.delete('TASKS', id)
}

module.exports = { getAll, getById, postTask, putTask, deleteTask };
