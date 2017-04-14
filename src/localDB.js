import low from 'lowdb';
const db = low('db.json');

export defualt {
  save: () => {
    db.set(path, data)
      .write();

      return 'success';
  },
  read: () => {
    return db.get(path);
  }
}