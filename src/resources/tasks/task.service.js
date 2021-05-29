const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);
const getById = (id) => tasksRepo.getById(id)
const postTask = async (task) => tasksRepo.postTask(task);
const putTask = async (task) => tasksRepo.putTask(task);
const deleteTask = async (id) => tasksRepo.deleteTask( id );

module.exports = { getAll, getById, postTask, putTask, deleteTask };
