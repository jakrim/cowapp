const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const port = 3000;
const db = require('./db');
const path = require('path');
// var router = require('express').Router();

//Connect controller methods to their corresponding routes
// router.get('/', app.get);
// router.post('/', app.post);
const app = express();

app.use(morgan('dev'));
app.use(parser.json());
app.use('/', express.static(path.join(__dirname, '../dist')));

// model INSIDE controller
app.get('/cows', (req, res) => {
  // console.log(req);
  db.query('SELECT * from Cowapp', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // console.log('HJELLLO');
      res.status(200).send(data);
    }
  });
});

app.post('/', (req, res) => {
  // console.log(req.body);
  const { name, description } = req.body;
  db.query(
    'INSERT INTO Cowapp (name, description) VALUES (?,?)',
    [name, description],
    (err, data) => {
      if (err) {
        throw err;
      } else {
        res.status(201); //.send(data);
      }
    }
  );
});

app.listen(port, () =>
  console.log(`Cow server now listening on port ${port}!`)
);
