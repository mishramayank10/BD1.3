const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/check-login', (req, res) => {
  let isLoggedIn = req.query.isLoggedIn === 'true';
  let result;
  if (isLoggedIn) {
    result = 'User is logged in';
  } else {
    result = 'User is logged out';
  }
  res.send(result);
});

app.get('/check-discount', (req, res) => {
  let age = parseFloat(req.query.age);
  let result;
  if (age > 65) {
    result = 'User is eligible for a discount';
  } else {
    result = 'User is not eligible for a discount';
  }
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
