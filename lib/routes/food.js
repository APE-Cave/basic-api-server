'use strict';

const express = require('express');
// index.js is automatic reference when present in directory like models/ 
const { MessageModel } = require('../models'); 

const router = express.Router(); // give us object to define routing logic

router.post('/food', create);
router.get('/food', read);
router.get('/food/:id', read);
router.patch('/food/:id', update);
router.put('/food/:id', update);
router.delete('/food/:id', remove);

function create(req, res, next) {
  
  res.send('working on create');
}
function read(req, res, next) {
  console.log('Reading from food route');

  res.status(200).send('working on read');
}
function update(req, res, next) {
  res.send('working on update');
}
function remove(req, res, next) {
  res.send('working on remove/delete');
}

module.exports = router;