const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const mark = { name: 'Mark', age: 100, cool: true };
  // res.send('Hey! It works!');
  // res.json(mark);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('hello');
});

// Reverses what is returned in res 
router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join();
  res.send(reverse);
});

module.exports = router;
