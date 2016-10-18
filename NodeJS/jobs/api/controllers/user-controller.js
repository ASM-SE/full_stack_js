'use strict';

const User = require('../models/user-model');
const ctrl = {};

ctrl.getUsers = (req, res) =>{
//  console.log(req.user); //esse dado vem do basic-auth-middleware, permitindo utilizar o usuário sempre que for preciso
  User.get(req.query)
  .then((data) =>{
    res.send(data);
  })
  .catch((err) =>{
    res.status(500).send(err);
  });
  //  res.send(User.get(req.query.name)); //Antes sem o mongodb
};




ctrl.saveUser = (req, res) => {
  User.save(req.body)
  .then((data) => {
    res.status(201).send(data);
  })
  .catch((err) =>{
    res.status(500).send(err);
  });

};


ctrl.updateUser = (req, res) => {
  User.update(req.params.id, req.body)
  .then(() => {
    res.status(200).send();
  })
  .catch((err) =>{
    res.status(500).send(err);
  });

};


 ctrl.getUser = (req, res) =>{
  User.getById(req.params.id)
  .then((data) =>{
    res.send(data);
  })
  .catch((err) =>{
    res.status(500).send(err);
  });
};

ctrl.removeUser = (req, res) =>{
  User.remove(req.params.id)
  .then(( ) =>{
    res.status(200).send();
  })
  .catch((err) =>{
    res.status(500).send(err);
  });
}


ctrl.login = (req, res) =>{
  User.autenticate(req.params.name, req.params.password)
  .then((data) =>{
        console.log('Usuário autenticado!');
    res.send(data);
  })
  .catch((err) =>{
        console.log('Usuário inexistente!');
    res.status(500).send(err);

  });
}


module.exports = ctrl;
