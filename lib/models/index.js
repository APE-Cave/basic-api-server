'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';

const foodSchema = require('./food.schema.js');
const tablewareSchema = require('./tableware.schema.js');

// create connection instance / singleton
let db = new Sequelize(POSTGRES_URI);

const FoodModel = foodSchema(db, DataTypes);
const TablewareModel = tablewareSchema(db, DataTypes);

module.exports = {
  db,
  FoodModel,
  TablewareModel,
};