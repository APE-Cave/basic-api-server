'use strict';

const {app} = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(app);

describe('Testing the food router', () => {

  it('Should read from food data', async () => {
  
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
    expect(response.body.count).toBeDefined;
    expect(response.body.results).toBeDefined;
  });
});
