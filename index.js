const express = require("express");
const bodyParser = require("body-parser");

const saveData = require("./model/saveData");

const app = express();
const port = 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + "/views"));

app.get("/create", urlencodedParser, (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  const phone = req.query.phone;
  const date = req.query.data;
  saveData.insertRow(name, age, phone, date, res);
  console.log("Dados salvos com GET");
});

app.post("/create", urlencodedParser, (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const phone = req.body.phone;
  const date = req.body.data;

  saveData.insertRow(name, age, phone, date, res);
  console.log("Dados salvos com POST");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://127.0.0.1:${port}`);
});
