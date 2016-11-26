//tests/nodejs/main.test.js

'use strict';

let app = require('../../server/app');         //volta no server e busca o app porque tem o export app - passa o contexto do express para dentro do super teste
let request = require('supertest')(app);       //Injeta o app dentro do supertest 
let assert = require('assert');                //Do node

//mocha, instanbul >> utilizados para criar os testes
//este main.test vai testar a aplicação quando ela sobe

//Suite de teste que vão possuir os testes gerais da aplicação
describe('main', () => {
    //Cada estrutura de teste é um it
    it('app is up', (done) =>{
        request                                         //Faz um request para verificar se passa no teste
            .get('/')
            .end((err, response) => {
                assert.equal(response.status, 200);     //Asserts são as partes mais importantes, pois são o que comparam o resultado esperado.
                assert.deepEqual(response.body, {});    //para objeto e array
                done();
        });
    });

    it('GET /api should respond PONG', (done) =>{
        request                                         
            .get('/api')
            .end((err, response) => {
                assert.equal(response.text, 'PONG');    
                assert.equal(response.status, 200);
                done();
        });
    }); 

    it('GET /notfound shouldbe 404', () =>{
        request
            .get((err, response) => {
                assert.equal(response.status, 404);
                console.log(response.body.message, 'Not Found');
            })

    });    
});