'use strict';

const express = require('express');
const router = express.Router(); //give us objec to define routing logic

router.post('/food', create);
router.get('/food', read);
router.get('/food/:id', read);
router.patch('/food/:id', update);
router.put('/food/:id', update);
router.delete('/food/:id', remove);

function create(req, res, next) {
  
}
function read(req, res, next) {

}
function read(req, res, next) {

}
function update(req, res, next) {

}
function update(req, res, next) {

}
function remove(req, res, next) {

}

module.exports = router;