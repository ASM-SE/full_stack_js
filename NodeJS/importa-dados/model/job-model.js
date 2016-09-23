'use strinct';

const jobs = [];

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

function Job(title, company, contact){
  this.title = title;
  this.company = company;
  this.contact = contact;
}

Job.prototype.save = function() {
  jogs.push(this);
};

module.exports = Job;
