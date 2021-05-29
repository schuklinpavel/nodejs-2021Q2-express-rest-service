const TABLES = {
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
  getAll: (table) => TABLES[table],

  /**
   * Return table element by id
   * @param {string} table name
   * @param {string} id element
   * @returns {User|Task|Board} entity
   */
  getById: (table, id) => TABLES[table].find(i => i.id === id),

  /**
   * Add entity to table
   * @param {string} table name
   * @param {User|Task|Board} item entity
   */
  post: (table, item) => TABLES[table].push(item),

  /**
   * Update entity in table
   * @param {string} table name
   * @param {User|Task|Board} item entity
   * @returns {User|Task|Board} entity
   */
  put: (table, item) => {
    const index = TABLES[table].findIndex(i => i.id === item.id);
    // eslint-disable-next-line
    for (const key in item) {
      if (item[key]) {
        TABLES[table][index][key] = item[key];
      }
    }
    return TABLES[table][index];
  },

  /**
   * Remove entity by id
   * @param {string} table name
   * @param {string} id entity
   */
  delete: (table, id) => {
    if (table === 'BOARDS') {
      TABLES.TASKS = TABLES.TASKS.filter(task => task.boardId !== id);
    }

    if (table === 'USERS') {
      TABLES.TASKS = TABLES.TASKS.map(task => ({ ...task, userId: null}))
    }

    const index = TABLES[table].findIndex(i => i.id === id);
    if (index !== -1) {
      TABLES[table].splice(index, 1);
    }
  }
}

module.exports = db;
