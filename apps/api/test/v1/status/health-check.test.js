/* eslint-env jest */
const request = require('supertest')
const app = require('../../../app')

describe('Health check', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/status')
    
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe('OK')
  })
})