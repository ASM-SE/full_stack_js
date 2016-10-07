'use strict';

//Arquivo que irá conectar com o BD
const mongoose = require('mongoose');
const env = require('./env');

mongoose.Promise = global.Promise; //resolver problema de depreaciated
mongoose.connect(env.database.uri, env.database.credentials);

const db = mongoose.connection;

db.on('open', () =>{
  console.log(`Connected with: ${env.database.uri}`);
});

db.on('error', (err) =>{
  console.log(`Mongo error: ${err}`);
});

process.on('SIGINT', ()=>{
  db.close(() =>{
  console.log('MongoDB disconnected through app termination');
  process.exit(0);
 });
});






module.exports = db;
