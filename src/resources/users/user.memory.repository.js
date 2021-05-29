const db = require('../db.js');

/**
 * Function call - Get All entity from target table
 * @returns {Promise<User[]>}
 */
const getAll = async () => {
  const all = await db.getAll('USERS');
  return all;
}

/**
 * Function call - Get entity by id
 * @param {string} id
 * @returns {Promise<User>} entity
 */
const getById = async (id) => {
  const user = await db.getById('USERS', id);
  return user;
};

/**
 * Function call - Add entity to table
 * @param {User} item entity
 * @returns {Promise<User>}
 */
const postUser = async (item) => {
  await db.post('USERS', item);
  return item;
};

/**
 * Function call - Update entity in table
 * @param {User} item entity
 * @returns {Promise<User>} entity
 */
const putUser = async (item) => {
  const user = await db.put('USERS', item);
  return user;
}

/**
 * Function call - Remove entity by id
 * @param {string} id entity
 * @returns {Promise<void>} entity
 */
const deleteUser = async (id) => {
  await db.delete('USERS', id);
}

module.exports = { getAll, getById, postUser, putUser, deleteUser };
