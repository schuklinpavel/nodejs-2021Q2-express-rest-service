import { v4 } from 'uuid';

type Column = {
  id: string;
  title: string;
  order: number;
};

export interface IBoard {
  id: string;
  title: string;
  columns?: Column[];
}

class Board implements IBoard{
  id: string;

  title: string;

  columns?: Column[];

  constructor({
    id = v4(),
    title = '',
    columns = [
      {
        id: v4(),
        title: '',
        order: 0,
      }
    ]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: Board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

export default Board;
