'use strict';


//Habilitando cache no servidor
const express = require('express');
const compression = require('compression');
const app = express();
const isProduction = process.env.NODE_ENV == 'production';
const cacheOption = isProduction ? { maxAge: 'id'} : {};
const port = process.env.PORT || 4000;

//Para não mostrar que o express foi utilizado
app.disable('x-powered-by');

app.use(compression());

app.use('/', express.static(isProduction ? 'dist' : 'src', cacheOption));
app.listen(port, () => console.log(`Listen on ${port}.`););
