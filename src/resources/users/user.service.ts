import usersRepo from './user.memory.repository';
import { IUser } from './user.model';

// const getAll = async (): Promise<IUser[]> => await usersRepo.getAll();
const getAll = () => usersRepo.getAll();
const getById = (id: string) => usersRepo.getById(id)
const postUser = async (user: IUser) => usersRepo.postUser(user);
const putUser = async (user: IUser) => usersRepo.putUser(user);
const deleteUser = async (id: string) => usersRepo.deleteUser(id);

export default { getAll, getById, postUser, putUser, deleteUser };
