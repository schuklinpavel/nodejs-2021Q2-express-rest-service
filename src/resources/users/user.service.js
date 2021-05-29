const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = (id) => usersRepo.getById(id)
const postUser = async (user) => usersRepo.postUser(user);
const putUser = async (user) => usersRepo.putUser(user);
const deleteUser = async (id) => usersRepo.deleteUser(id);

module.exports = { getAll, getById, postUser, putUser, deleteUser };
