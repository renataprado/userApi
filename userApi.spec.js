const app = require("./app.js"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

const mongoose = require("mongoose");
const config = require('./config.json');
const uri = config.mongodb.uri;

beforeAll(async () => {
  await mongoose.connect(uri, { useNewUrlParser: true });
});

//https://www.freecodecamp.org/news/end-point-testing/

describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  });


describe('Endpoint tests', () => {
    it("Async test", async done => {
        // Do your async tests here
        done();
      }),

    it("gets return connect message", async done => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
        expect(response.text).toBe("REST Back-end Challenge 20201209 Running");
        done();
      })
    
});



