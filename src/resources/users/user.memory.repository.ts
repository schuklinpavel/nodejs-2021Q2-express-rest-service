import { IUser } from './user.model';
import db from '../db';

/**
 * Function call - Get All entity from target table
 * @returns {Promise<User[]>}
 */
const getAll = async () => { // можно прописать : Promise<IUser[]>
  const all = await db.getAll('USERS');
  return all as IUser[];
}

/**
 * Function call - Get entity by id
 * @param {string} id
 * @returns {Promise<User>} entity
 */
const getById = async (id: string) => {
  const user = await db.getById('USERS', id);
  return user as IUser;
};

/**
 * Function call - Add entity to table
 * @param {User} item entity
 * @returns {Promise<User>}
 */
const postUser = async (item: IUser) => {
  await db.post('USERS', item);
  return item;
};

/**
 * Function call - Update entity in table
 * @param {User} item entity
 * @returns {Promise<User>} entity
 */
const putUser = async (item: IUser): Promise<IUser> => {
  const user = await db.put('USERS', item);
  return user as IUser;
}

/**
 * Function call - Remove entity by id
 * @param {string} id entity
 * @returns {Promise<void>} entity
 */
const deleteUser = async (id: string) => {
  await db.delete('USERS', id);
}

export default { getAll, getById, postUser, putUser, deleteUser };
