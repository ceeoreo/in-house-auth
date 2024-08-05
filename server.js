const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));

const PORT = process.env.PORT || 3000;
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'users'
})

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    db.query(`SHOW DATABASES`, (err, result) => {
      if (err) {
        console.log(`This is the error: ${err}`);
      } else {
        console.log(`This is the result: ${result}`)
      }
    })
  }
})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/loggedin.html'))
})

app.post('/login', (req, res) => {
  const user_email = req.body.user_email;
  const user_password = req.body.user_password;
  
  res.send(`This is your email: ${user_email}`);
})

app.listen(PORT, () => {
  console.log(`this app is listening to port ${PORT}`)
})