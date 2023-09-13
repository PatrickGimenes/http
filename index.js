const db = require("./bd");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/createGet", (req, res) => {
  res.send("Got a GET request");

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
        }
        console.log(`Inserted a row with the ID: ${this.lastID}`);
      }
    );
  }

  insertRow();
});

app.post("/createPost", function (req, res) {
  res.send("Got a POST request");
  const data = req.body;
  console.log(data);
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
        }
        console.log(`Inserted a row with the ID: ${this.lastID}`);
      }
    );
  }

  insertRow();
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://127.0.0.1:${port}`);
});
