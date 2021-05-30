import boardsRepo from './board.memory.repository';
import { IBoard } from './board.model';

const getAll = () => boardsRepo.getAll();
const getById = (id: string) => boardsRepo.getById(id)
const postBoard = async (board: IBoard) => boardsRepo.postBoard(board);
const putBoard = async (board: IBoard) => boardsRepo.putBoard(board);
const deleteBoard = async (id: string) => boardsRepo.deleteBoard(id);

export default { getAll, getById, postBoard, putBoard, deleteBoard };
