import tasksRepo from './task.memory.repository';
import { ITask } from './task.model';

const getAll = () => tasksRepo.getAll();
const getById = (id: string) => tasksRepo.getById(id)
const postTask = async (task: ITask) => tasksRepo.postTask(task);
const putTask = async (task: ITask) => tasksRepo.putTask(task);
const deleteTask = async (id: string) => tasksRepo.deleteTask( id );

export default { getAll, getById, postTask, putTask, deleteTask };
