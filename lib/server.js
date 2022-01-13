'use strict';

const express = require('express');
const app = express();
const foodRoutes = require('./routes/food.js');

app.use(express.json());
app.use(foodRoutes);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is listening on ', port);
    });
  },
  app,
};