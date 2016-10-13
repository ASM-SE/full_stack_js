'use strict';
//Middlewares são utilizados para algum pré processamento
//ou para internacionalização, etc

//Este middleware faz o processo de autenticação de um usuário
//middleware é sempre uma função


const User = require('../models/user-model');

const AUTHORIZATION_METHOD = 'Basic';

module.exports = (req, res, next) =>{
//return next(404); colocado para ver a propagação do erro por meio do next

  let _basicHeader = req.headers.authorization || ''; //se o primeiro item não existir ele pega uma propriedade vazia
  let _basicHeaderData = _basicHeader.split(' ');
  if(_basicHeaderData && _basicHeaderData[0] !== AUTHORIZATION_METHOD){ //primeira verificacao olha se ele existe
    return res.status(403).send(req.files.forbidden);
  }

  let _basicAuthCreentialData = (new Buffer(_basicHeaderData[1], 'base64')).toString('utf8').split(':');

  let _credentials = {
    name: _basicAuthCreentialData[0],
    password: _basicAuthCreentialData[1],
  }

  User.autenticate(_credentials).then((data)=>{
    if(data && data != null){
      console.log('Usuário autenticado!');
      req.user = data;
      return next();
    }
      return res.status(401).send(req.files.forbidden);
  }).catch((err) =>{
      return res.status(401).send(req.files.forbidden);
  });

//Como a ordem dos Middlewares interferem, este deve ficar antes para que seja possivel utilziar
//console.log(req.user); esse dado vem do basic-auth-middleware, permitindo utilizar o usuário sempre que for preciso
};
