'use strict';

const express = require('express');
// index.js is automatic reference when present in directory like models/ 
const { FoodModel } = require('../models'); 
// const Food = require('../models/food.schema');

const router = express.Router(); // give us object to define routing logic

router.post('/food', create);
router.get('/food', read);
router.get('/food/:id', read);
router.patch('/food/:id', update);
router.put('/food/:id', update);
router.delete('/food/:id', remove);

async function create(req, res) {
  let created = await FoodModel.create(req.body);
  res.status(200).send(created);
}
async function read(req, res) {
  console.log('Reading from food route');
  let foodReturn = await FoodModel.findAll(); // TEST
  let resObject = {
    count: foodReturn.length,
    results: foodReturn,
  };
  res.status(200).json(resObject);
}
async function update(req, res, next) {
  res.send('working on update');
}
async function remove(req, res, next) {
  res.send('working on remove/delete');
}

module.exports = router;