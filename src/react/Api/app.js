const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const eratosthene = require('../../source/eratosthene');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:1337');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post('/', (req, res) => {
  const primes = eratosthene(req.body);
  res.send(primes);
});

app.listen(8888, () => {
  console.log('API is running on port 8888! ---> http://localhost:8888');
});
