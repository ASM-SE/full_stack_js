'use strict';
require('./init-database');


const http = require('http');



const server = http.createServer((req, res) =>{
  console.log(req.url); //recebe as requisições - vai imprimir no console as requisiçoes que foram recebidas
});

server.listen(3000, () => {
  console.log('Escutando na porta 3000');
})
