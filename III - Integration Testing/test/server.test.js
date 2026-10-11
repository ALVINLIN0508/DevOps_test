
const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/server');
// Integration tests for the server
describe('GET /hex-to-rgb', () => {
    // it('returns RGB for valid hex', async () => {
  it('returns RGB for valid hex', async () => {
    const res = await request(app).get('/hex-to-rgb?hex=%23FF0000'); // %23 = #
    expect(res.status).to.equal(200);
    expect(res.body.rgb).to.deep.equal({ r: 255, g: 0, b: 0 });
  });
//  it('returns RGB for valid hex without #', async () => {
  it('returns 400 for missing hex', async () => {
    const res = await request(app).get('/hex-to-rgb');
    expect(res.status).to.equal(400);
  });

  it('returns 400 for invalid hex', async () => {
    const res = await request(app).get('/hex-to-rgb?hex=ZZZZZZ');
    expect(res.status).to.equal(400);
  });
});
