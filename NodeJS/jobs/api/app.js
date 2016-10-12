'use strict';


//require('./init-database');
const db = require('./db');
const express = require('express'); //isntalado como npm install --save express
const bodyParser = require('body-parser');
const authMiddleware = require('./middlewares/basic-auth-middleware');
const app = express();//app se torna um gerenciador de rotas


//Configuração de Middleware
//Para definir um middleware na aplicação deve ser usado o use e dentro da mesma uma função
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); //faça o parser em json - junta os pacotes enviados, une e retorna

//Criando um middleware interceptador
//a ordem de inserção dos middlewares importa, neste caso o bodyParser será executado primeiro, logo os resultado pode ser alterado devido a ordem
app.use(authMiddleware);

//Config Routes
app.use(require('./routes/company-route')); //use espera que o que seja passado seja uma rota
app.use(require('./routes/user-route'));
//Criando rotas:
app.get('/', (req, res) => {
  res.send('Olá mundo!');
});

module.exports = app;
