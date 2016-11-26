//test/noejs/customer.test.js

'use strict';

let app = require('../../server/app');         //volta no server e busca o app porque tem o export app - passa o contexto do express para dentro do super teste
let request = require('supertest')(app);       //Injeta o app dentro do supertest 
let assert = require('assert');                //Do node


describe('customer', () => {
 
    it('GET /api/customers should list all customers', (done) =>{
    request
        .get('api/customers')
        .end((err, response) => {
            console.log(response.status);
            console.log(response.body);
            done();
        })
    });

});