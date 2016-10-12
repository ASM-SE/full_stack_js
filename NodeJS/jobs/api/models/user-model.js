'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({ //Criação de um schema - isso vem do mongoose
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true //vai mandar pro campo porque foi definido o default - mesmo que o campo não seja obrigatório, sempre colocar um valor default
  }
});

const User = mongoose.model('User', schema); //Ao indicar User ele vai relacionar o coolection no mongodb no plural, no caso users (tive problemas ao criar a collection pois o nome que usei era user)

// .../users?_id=??? EXEMPLO DE COMO PASSAR PARAMETRO NA URL
module.exports.get = (query) =>{
  return User.find(query);
/*  .then((data) =>{  //Promisses
    console.log(data);
  }).catch((err) =>{
    console.log(err);
  });*/
};

//Autenticacao versão Renan - não verifica se o usário está ativo
modelo.exports.authorization = (credentials) =>{
  return User.findOne(credentials);
}

//Autenticacao de usuario
module.exports.autenticate = (_credentials) =>{
  console.log(_credentials);
  let _query = { name: _credentials.name, password: _credentials.password, active: true};
  //let _fields = {_id: false, active: false};
  //return User.find(_query, _fields);
  console.log(_query);
  return User.findOne(_query);

};

module.exports.getById = (_id) => {
  let _query = { _id };
  let _fields = {password: false};
  return User.findOne(_query, _fields);
};


module.exports.save = (user) => {
 return  new Promise((resolve, reject) => {

     new User(user).save((err, data) => {
       if(err){
         return reject(err);
       }
       return resolve({_id: data._id});
     });

  });

};



module.exports.update = (_id, user) =>{
  let _query = { _id }; //mesma coisa se eu fizer _id : _id
  return User.update(_query, user);
};


module.exports.remove = (_id) =>{
  let _query = { _id };
  return User.remove(_query);
}












/*
//ANTES DO MONGODB
const users = [];

class User {
  constructor(name, password, profile) {
    this.name = name;
    this.password = password;
    this.profile = profile;
  }
  save() {
    users.push(this);
  }

  static get(name) {
    if(name) {
      return users.filter(
        (user) => user.name.toLowerCase().startsWith(name.toLowerCase())
      );
    }
    return users;
  }
}

new User('Renan', '123456', 'ADMIN').save();

module.exports = User;*/
