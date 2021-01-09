const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'hello worldx'});
});

app.get('/test', (req, res) => {
  res.send([
    {
      message: "test"
    },
    {
      message: "hello"
    }
  ]);
});

app.listen(3000);