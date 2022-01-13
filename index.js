'use strict';

const { start, app } = require('./lib/server.js');

const PORT = process.env.PORT || 3000;

start(PORT);