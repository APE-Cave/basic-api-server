'use strict';

const {app} = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(app);
const { db } = require('../lib/models');

beforeAll(async () => {
  // await db.drop();  
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing the food router', () => {

  it('Should create new food data', async () => {
    const testObj = {'dishName': 'wings', 'quantity': '24'};
    // const testObj = {'dishName': 'salad', 'quantity': '3'};
    // const testObj = {'dishName': 'soup', 'quantity': '5'};
    const response = await request.post('/food').send(testObj);
    expect(response.status).toEqual(200);
    console.log(response.body);
    expect(response.body.quantity).toEqual(testObj.quantity);
    expect(response.body.dishName).toEqual(testObj.dishName);
  });
  
  it('Should read from food data', async () => {
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
    expect(response.body.count).toEqual(1);
    expect(response.body.results).toBeDefined;
  });
});
