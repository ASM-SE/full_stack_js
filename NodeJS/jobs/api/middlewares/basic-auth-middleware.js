'use strict';
//Middlewares são utilizados para algum pré processamento
//ou para internacionalização, etc

//Este middleware faz o processo de autenticação de um usuário
//middleware é sempre uma função


const User = require('../models/user-model');

const AUTHORIZATION_METHOD = 'Basic';

module.exports = (req, res, next) =>{
  let _basicHeader = req.headers.authorization || ''; //se o primeiro item não existir ele pega uma propriedade vazia
  let _basicHeaderData = _basicHeader.split(' ');
  if(_basicHeaderData && _basicHeaderData[0] !== AUTHORIZATION_METHOD){ //primeira verificacao olha se ele existe
    return res.status(403).send();
  }

  let _basicAuthCreentialData = (new Buffer(_basicHeaderData[1], 'base64')).toString('utf8').split(':');

  let _credentials = {
    name: _basicAuthCreentialData[0],
    password: _basicAuthCreentialData[1],
  }

  User.autenticate(_credentials).then((data)=>{
    if(data && data != null){
      console.log('Usuário autenticado!');
      return next();
    }
      return res.status(401).send();
  }).catch((err) =>{
      return res.status(401).send();
  });

  //usuario testado: Joao:123456

};
