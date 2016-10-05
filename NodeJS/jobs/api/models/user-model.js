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
    default: true
  }
});

const User = mongoose.model('User', schema); //ERRO AQUI... O BANCO NÃO CORRESPONDE A ESTE MODELO

// .../users?_id=???
module.exports.get = (query) =>{
  return User.find(query);
/*  .then((data) =>{  //Promisses
    console.log(data);
  }).catch((err) =>{
    console.log(err);
  });*/
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
