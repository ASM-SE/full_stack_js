'use strict';


//require('./init-database');
const db = require('./db');
const express = require('express'); //isntalado como npm install --save express
const bodyParser = require('body-parser');
const app = express();//app se torna um gerenciador de rotas


//Config Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); //faça o parser em json - junta os pacotes enviados, une e retorna


//Config Routes
app.use(require('./routes/company-route')); //use espera que o que seja passado seja uma rota
app.use(require('./routes/user-route'));
//Criando rotas:
app.get('/', (req, res) => {
  res.send('Olá mundo!');
});

module.exports = app;
