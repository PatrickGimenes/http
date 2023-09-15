const sqlite3 = require("sqlite3").verbose();

function createDbConnection() {
  const db = new sqlite3.Database(":memory:", (error) => {
    if (error) {
      return console.error(error.message);
    }
    createTable(db);
  });
  console.log("Conexão com SQLite realizada com sucesso!");
  return db;
}

function createTable(db) {
  db.exec(`
    CREATE TABLE users
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name   VARCHAR(50) NOT NULL,
        age INTEGER NOT NULL,
        phone VARCHAR(50) NOT NULL,
        date VARCHAR(10) 
    );
  `);
}

module.exports = createDbConnection();
