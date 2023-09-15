const db = require("./db");

function insertRow(name, age, phone, date, res) {
  db.run(
    `INSERT INTO users (name, age, phone, date) VALUES (?, ?, ?, ?)`,
    [name, age, phone, date],
    function (error) {
      if (error) {
        console.error(error.message);
        res.sendStatus(502);
      }
      console.log(`Inserted a row with the ID: ${this.lastID}`);
      res.sendStatus(201);
    }
  );
}

module.exports = { insertRow };
