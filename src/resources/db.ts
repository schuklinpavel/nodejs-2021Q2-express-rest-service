import { IUser } from './users/user.model';
import { ITask } from './tasks/task.model';
import { IBoard } from './boards/board.model';

type Entity = IUser | ITask | IBoard;

type EntityTables = {
  USERS: IUser[];
  BOARDS: IBoard[];
  TASKS: ITask[];
}

// type EntityTables = {
//   [key: string]: IUser[] | IBoard[] | ITask[] // Вызывает ошибку TS2349 filter && find
// }

const TABLES: EntityTables = {
  USERS: [],
  BOARDS: [],
  TASKS: [],
}

const db = {
  /**
   * Return table
   * @param {string} table name
   * @returns {User[]|Task[]|Board[]} table
   */
  getAll: (table: keyof EntityTables): Entity[] => TABLES[table],

  /**
   * Return table element by id
   * @param {string} table name
   * @param {string} id element
   * @returns {User|Task|Board} entity
   */
  // getById: (table: keyof EntityTables, id: string): Entity => TABLES[table].find((i: Entity) => i.id === id), // TS2349: This expression is not callable ... has signatures, but none of those signatures are compatible with each other.
  getById: (table: keyof EntityTables, id: string) => { // TS2349 костыль
    switch (table) {
      case 'USERS':
        return TABLES[table].find((i: Entity) => i.id === id); // и так тоже понимает по case
      case 'BOARDS':
        return TABLES['BOARDS'].find((i: Entity) => i.id === id);
      case 'TASKS':
        return TABLES['TASKS'].find((i: Entity) => i.id === id);
      default:
        return null;
    }
  },

  /**
   * Add entity to table
   * @param {string} table name
   * @param {User|Task|Board} item entity
   */
  // post: (table: keyof EntityTables, item: Entity) => TABLES[table].push(item), // TS2345: Argument of type 'Entity' is not assignable to parameter of type 'IUser & IBoard & ITask'...
  post: (table: keyof EntityTables, item: Entity) => { // TS2345 костыль
    let entity;
    switch (table) {
      case 'USERS':
        entity = item as IUser;
        TABLES['USERS'].push(entity);
        break;
      case 'BOARDS':
        entity = item as IBoard;
        TABLES['BOARDS'].push(entity);
        break;
      case 'TASKS':
        entity = item as ITask;
        TABLES['TASKS'].push(entity);
        break;
      default:
        break;
    }
  },

  /**
   * Update entity in table
   * @param {string} table name
   * @param {User|Task|Board} item entity
   * @returns {User|Task|Board} entity
   */
  put: (table: keyof EntityTables, item: Entity) => {
    const index = TABLES?.[table]?.findIndex(i => i.id === item.id);
    if (index !== -1) { // TS2538: Type 'undefined' cannot be used as an index type.
      // eslint-disable-next-line
      let key: keyof Entity; // TS7053 (for in)
      for (key in item) {
        if (item[key]) {
          const target = TABLES[table]?.[index]; // TS2532: Object is possibly 'undefined'.
          if (target) {
            target[key] = item[key];
          }
        }
      }
    }
    return TABLES[table]?.[index];
  },

  /**
   * Remove entity by id
   * @param {string} table name
   * @param {string} id entity
   */
  delete: (table: keyof EntityTables, id: string) => {
    if (table === 'BOARDS') {
      TABLES['TASKS'] = TABLES['TASKS']?.filter((task: ITask) => task.boardId !== id); // TS2349: This expression is not callable была из-за [key: string]: IUser[] | IBoard[] | ITask[]
    }

    if (table === 'USERS') {
      // TABLES['TASKS'] = TABLES['TASKS']?.map(task => ({ ...task, userId: null})); // TS2322 Type 'undefined' is not assignable to type
      TABLES['TASKS'] = TABLES['TASKS']?.map(task => ({ ...task, userId: null})) as ITask[]; // TS2322
    }

    const index = TABLES[table]?.findIndex(i => i.id === id);
    if (index !== -1) {
      TABLES[table].splice(index, 1);
    }
  }
}

export default db;
