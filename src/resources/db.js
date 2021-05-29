const TABLES = {
  USERS: [],
  BOARDS: [],
  TASKS: [],
}

const db = {
  getAll: (table) => TABLES[table],

  getById: (table, id) => TABLES[table].find(i => i.id === id),

  post: (table, item) => TABLES[table].push(item),

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
