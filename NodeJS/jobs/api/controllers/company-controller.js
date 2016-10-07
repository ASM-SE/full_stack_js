'use strict';

const Company = require('../models/company-model');
const ctrl = {};


ctrl.getCompanies = (req, res) => {
  Company.get(req.query)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};


ctrl.getCompany = (req, res) =>{
  Company.getById(req.params.id)
  .then((data) =>{
    res.send(data);
  })
  .catch((err) =>{
    res.status(500).send(err);
  });
};


ctrl.saveCompany = (req, res)=> {
  Company.save(req.body)
  .then((data) =>{
    res.status(201).send(data);
  })
  .catch((err) =>{
    res.status(500).send(err);
  });
};

ctrl.updateCompany = (req, res) =>{
  Company.update(req.params.id, req.body)
  .then((data)=>{
    res.status(200).send();
  })
  .catch((err) =>{
    res.status(500).send(err);
  });
};

ctrl.removeCompany = (req, res) =>{ //Ajustar para não remover, apenas alterar active para false
  Company.remove(req.params.id)
  .then((data) =>{
    res.status(200).send(data);
  })
  .catch((err) =>{
    res.status(500).send(err);
  });
};


module.exports = ctrl;
/* ANTES DO MONGO DB
ctrl.getCompanies = (req, res) => {
  res.send(Company.get(req.query.name));
};

ctrl.getCompany = (req, res) => {
  res.send(Company.getById(req.params.id));
};

ctrl.createCompany = (req, res) => {
  new Company(
    req.body.name,
    req.body.segment,
    req.body.email,
    req.body.site,
    req.body.city,
    req.body.tecnologies
  ).save();

  // 201 == Created
  res.status(201).send(req.body);
};

ctrl.updateCompany = (req, res) => {
  let company = new Company(
    req.body.name,
    req.body.segment,
    req.body.email,
    req.body.site,
    req.body.city,
    req.body.tecnologies
  );

  company.id = req.params.id;

  company.update();

  res.send(req.body);
}

ctrl.deleteCompany = (req, res) => {
  Company.remove(req.params.id)
  res.send();
};

module.exports = ctrl;*/
