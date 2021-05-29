const db = require('../db.js');

const getAll = async () => {
  const all = await db.getAll('TASKS');
  return all;
}

const getById = async (id) => {
  const task = await db.getById('TASKS', id);
  return task;
};

const postTask = async (item) => {
  await db.post('TASKS', item);
  return item;
};

const putTask = async (item) => {
  const task = await db.put('TASKS', item)
  return task;
}

const deleteTask = async (id) => {
  await db.delete('TASKS', id)
}

module.exports = { getAll, getById, postTask, putTask, deleteTask };
