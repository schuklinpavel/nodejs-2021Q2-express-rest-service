const db = require('../db.js');

const getAll = async () => {
  const all = await db.getAll('USERS');
  return all;
}

const getById = async (id) => {
  const user = await db.getById('USERS', id);
  return user;
};

const postUser = async (item) => {
  await db.post('USERS', item);
  return item;
};

const putUser = async (item) => {
  const user = await db.put('USERS', item);
  return user;
}

const deleteUser = async (id) => {
  await db.delete('USERS', {id});
}

module.exports = { getAll, getById, postUser, putUser, deleteUser };
