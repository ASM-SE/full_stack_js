'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    segment: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    site: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    tecnologies: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: true
    }
});

const Company = mongoose.model('Company', schema);

module.exports.get = (query) => {
  query.active = true;
  return Company.find(query);
};



module.exports.getById = (_id) => {
  let _query = { _id, active: true };
  let _fields = { email: false,
                  site: false}; //para não mostrar e-mail
  return Company.findOne(_query, _fields);
};

module.exports.save = (company) =>{
  return new Promise((resolve, reject) => {
    new Company(company).save((err, data) =>{
      if(err){
        return reject(err);
      }
      return resolve({_id: data._id});
    });
  });
};

module.exports.update = (_id, company) =>{
  let _query = { _id };
  return Company.update(_query, company);
}

module.exports.remove = (_id) =>{
  let _query = {_id};
  let _fields = {active: false};
  return Company.update(_query, company);
}


/*ANTES DO MONGODB
let companies = [];

class Company {
  constructor(name, segment, email, site, city, tecnologies) {
    this.name = name;
    this.segment = segment;
    this.email = email;
    this.site = site;
    this.city = city;
    this.tecnologies = tecnologies;
  }




  save() {
    companies.push(this);
  }

  update() {
    companies[this.id] = this;
  }

  static get(name) {
    if(name) {
      return companies.filter(
        (company) => company.name.toLowerCase().startsWith(name.toLowerCase())
      );
    }
    return companies;
  }

  static getById(id) {
    return companies[id];
  }

  static remove(id) {
    companies.splice(id, 1);
  }


}
module.exports = Company;*/
