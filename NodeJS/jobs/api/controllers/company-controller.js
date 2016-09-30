'use strict';


const Company = require('../models/company-model');
const ctrl = {};

ctrl.getCompanies = (req, res) => {
  console.log(req.query);
  res.send(Company.get(req.query.name));
};

ctrl.getCompany = (req, res) => {
  res.send(Company.getById(req.params.id));
}


ctrl.createCompany = (req, res) => {
  new Company(
    req.body.name,
    req.body.segment,
    req.body.email,
    req.body.site,
    req.body.city,
    req.body.tecnologie
  ).save();

  res.status(201).send(req.body);
};


ctrl.updateCompany = (req, res) => {
  let company = new Company(
    req.body.name,
    req.body.segment,
    req.body.email,
    req.body.site,
    req.body.city,
    req.body.tecnologie
  );

  company.id = req.params.id;
  company.update();

  res.send(req.body);
};



ctrl.deleteCompany = (req, res) => {
  Company.remove(req.params.id));
}



module.exports = ctrl;
