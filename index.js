const express = require('express')
const app = express()
const port = 3000

app.get('/create', (req, res) => {
  res.send('Hello World!')
})

app.post('/create', function (req, res) {
  res.send('Got a POST request');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
