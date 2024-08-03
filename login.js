const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.post('/login', (req, res) => {
  console.log(req.body);
  return res.send(200);
})