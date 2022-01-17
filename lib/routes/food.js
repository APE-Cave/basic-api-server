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
  console.log('Reading from food route. req.params.id is: ', req.params.id);

  let foodReturn = (req.params.id) ?
    await FoodModel.findByPk(req.params.id) :
    await FoodModel.findAll();

  res.status(200).send(foodReturn);
}
async function update(req, res) {
  if (req.params.id) {
    let foodReturn = await FoodModel.update(req.body, {
      where: { id: req.params.id },
    });

    res.status(200).send(foodReturn);
  }
}
async function remove(req, res, next) {
  res.send('working on remove/delete');
}

module.exports = router;