'use strinct';

const companies = [];
const company = [];

//Funcao para salvar os dados
/*
function save(job){
  jobs.push(job);
}*/


//tudo que estiver no export poderá ser utilizado em outro arquivo
//module.exports = save; exporta o save como uma função
//por padrão o export é um objeto vazio
//ele executa apenas uma vez


//Outras formas de exportar
//this
//variável exports
//porem usar somente o modeule.exports
//pois as outras (this e variavel exports) não exporta

/*testando igualdade
console.log(module.exports);
console.log(this == module.exports);
console.log(exports== module.exports);*/


/* Modelo antes do EC6
function Company(name, segment, email, site, city, technology){
  this.name = name;
  this.segment = segment;
  this.email = email;
  this.site = site;
  this.city = city;
  this.technology = technology;
}

Company.prototype.save = function() {
  company.push(this);
  console.log(this);
};

Company.get = function() {
  return companies;
}



module.exports = Company;
*/



//com o ES6
class Company {
  constructor(name, segment, email, site, city, technology){
    this.name = name;
    this.segment = segment;
    this.email = email;
    this.site = site;
    this.city = city;
    this.technology = technology;
  }

  save() {
    companies.push(this);
  }

  static get(name) {
    if(name){
    return companies.filter((company) => company.name.toLowerCase().startWith(name));
    }
    return companies;
  }
}

module.exports = Company;
