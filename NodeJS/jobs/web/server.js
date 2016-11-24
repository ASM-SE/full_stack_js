'use strict';


//Habilitando cache no servidor
const express = require('express');
const app = express();
const isProduction = process.env.NODE_ENV == 'production';
const cacheOption = isProduction ? { maxAge: 'id'} : {};
const port = process.env.PORT || 4000;

app.use('/', express.static(isProduction ? 'dist' : 'src', cacheOption));
app.listen(port, () => console.log(`Listen on ${port}.`););
