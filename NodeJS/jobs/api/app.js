'use strict';

require('./init-database');
const express = require('express'); //isntalado como npm install --save express
const app = express();//app se torna um gerenciador de rotas


app.use(require('./routes/company-route')); //use espera que o que seja passado seja uma rota
app.use(require('./routes/user-route'));
//Criando rotas:
app.get('/', (req, res) => {
  res.send('Olá mundo!');
});

module.exports = app;
