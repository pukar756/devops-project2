// tests/index.test.js
const request = require('supertest');
const express = require('express');
const app = express();

app.get('/api/add', (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  res.json({ sum });
});

test('GET /api/add should return the sum of two numbers', async () => {
  const response = await request(app).get('/api/add?a=1&b=2');
  expect(response.status).toBe(200);
  expect(response.body.sum).toBe(3);
});

