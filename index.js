const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./bd");

const app = express();
const port = 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + "/views"));

app.get("/create", urlencodedParser, (req, res) => {
  console.log("Dados salvos com GET");
  function insertRow() {
    const name = req.query.name;
    const age = req.query.age;
    const phone = req.query.phone;
    const date = req.query.data;
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

  insertRow();
});

app.post("/create", urlencodedParser, (req, res) => {
  console.log("Dados salvos com POST");
  function insertRow() {
    const name = req.body.name;
    const age = req.body.age;
    const phone = req.body.phone;
    const date = req.body.data;
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

  insertRow();
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://127.0.0.1:${port}`);
});
