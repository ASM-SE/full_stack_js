//test/noejs/customer.test.js

'use strict';

let app = require('../../server/app');         //volta no server e busca o app porque tem o export app - passa o contexto do express para dentro do super teste
let request = require('supertest')(app);       //Injeta o app dentro do supertest
let assert = require('assert');                //Do node
let db = require('../../server/config/Mongo');


describe('customer', () => {
  beforeEach((done)=>{
    let customer = {
      givenName: 'William',
      familyName: 'Moraes'
    };
    db.collection('customers').insert(customer, (err,data) =>{
        _id = data._id.toString();
        done();
    });
  });

  after((done)=>{
    db.collection('customers').remove({}, done);
  })

    it('GET /api/customers should list all customers', (done) =>{
    request
        .get('api/customers')
        .end((err, response) => {
          assert.equal(response.status, 200);
          assert.ok(body.items);
          assert.ok(body._metadata);

          assert.equal(body.items[0]._id, _id);
          assert.equal(body.items[0].givenName, 'William');
          assert.equal(body.items[0].familyName, 'Moares');
          console.log(body.items);
          done();
        })
    });

    it('GET /api/customers/:id of non existent user returns 400', (done) =>{
    request
        .get('api/customers/5839c0d45330c0706126048b')
        .end((err, response) => {
          let body = response.body;
          assert.equal(response.status, 200);
          assert.equal(body.items[0]._id, _id);
          assert.equal(body.items[0].givenName, 'William');
          assert.equal(body.items[0].familyName, 'Moares');
          console.log(body.items);
          done();
        })
    });

});
