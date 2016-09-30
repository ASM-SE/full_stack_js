'use strict';


const Company = require('../models/company-model');
const ctrl = {};

ctrl.getCompanies = (req, res) => {
  console.log(req.query);
  res.send(Company.get(req.query.name));
};

ctrl.saveCompany = (req, res) => {
  res.send('save');
};


module.exports = ctrl;
