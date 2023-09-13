const db = require("./db");
const express = require("express");

const app = express();
const port = 3000;

app.get("/create", (req, res) => {
  res.send("Hello World!");
  function insertRow() {
    const [name, age, phone, date] = req.body;
    db.run(
      `INSERT INTO users (name, age, phone, data) VALUES (?, ?, ?, ?)`,
      [name, age, phone, date],
      function (error) {
        if (error) {
          console.error(error.message);
        }
        console.log(`Inserted a row with the ID: ${this.lastID}`);
      }
    );
  }

  insertRow();
});

app.post("/create", function (req, res) {
  res.send("Got a POST request");

  function insertRow() {
    const [name, age, phone, date] = req.body;
    db.run(
      `INSERT INTO users (name, age, phone, data) VALUES (?, ?, ?, ?)`,
      [name, age, phone, date],
      function (error) {
        if (error) {
          console.error(error.message);
        }
        console.log(`Inserted a row with the ID: ${this.lastID}`);
      }
    );
  }

  insertRow();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
