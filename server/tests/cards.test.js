const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const chaiHTTP = require('chai');
const fs = require('fs');
// default data holder for cards
const defaultData = null;
// Card model
const Card = require('../models/Card.js');

const readDefaults = () => {
  // cache posts after reading them once
  if (!defaultData) {
    const contents = fs.readFileSync('./defaults/defaultCards.json', 'utf8');
    defaultData = JSON.parse(contents);
  }
  return defaultData;
};

const populateWithDefaults = () => {
  return Promise.all(readDefaults().map(card => new Card(card).save())));
};

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};


const STATUS = require('../helpers/status.js');

describe('/cards', () => {
  // Before each
  beforeEach((done) => {
    // 1. Clear the databse
    Card.remove({});
    // 2. Add fake data.
    populateWithDefaults()
    .then((defaults) => {
      return done();
    });
    // newBlob.save(function(err) {
    //   done();
    // });
  }).timeout(5000);

  describe('GET # /cards', () => {
    it('should return an array', (done) => {
      chai.request(server)
        .get('/cards')
        .end((err, res) => {
          if (err) return;
          expect(res.status).to.equal(STATUS.SUCCESS);
          expect(Array.isArray(res.body)).to.equal(true);
          expect()
          expect(res.body).to.have.lengthOf(6);
          done();
        });
      /* Setup is
         Create 3 boards

         Test for
         1. Expect status 200
         2. Expect the response to be an array
         3. Expect the response array to be length
      */
    });

    // Test test if data modle is accurate
    // This tests the properties on each object.
    // Test owner, title, description, members, containers lists.
    // it('should return card objects', () => {
      // Setup is
      // Create 2 boards

      // Test for
      // 1. Expect status 200
      // 2. Object 1 deep equals
      // 3. Object 2 deep equals

    // });

    // Test for failure in route
    // Status 500;

  });

  describe('GET # /cards/:cardID', () => {
    // Setup
    // Create 3 board objects
    // Get list of cards
    it('should return an object', (done) => {
      chai.request(server)
      .get('/cards')
      .end((err, res) => {
        if (err) return;
        // get random card with random number
        expect(res).to.have.lengthOf(6);
        chai.request(server)
        .get(`/cards/${}`)
      });
      // Test for object that exists
      // 1. status 200
      // 2. Check if object return deep equals

    });

    it('should return error', () => {
      // Test for object that doesn't exist
      // 1. Expect status 500
      // 2. check if reqponse { message: "Unable to find" }
    })

  });

  describe('POST # /cards', () => {
    // it should pass if correct object recieved
    // it should fail if stuff is missing
    // it should fail it data type is wrong
  });

  describe('PUT # /cards/:cardID', () => {
    // it should su
  });

  describe('DELETE # /cards/:cardID', () => {

  });

});
