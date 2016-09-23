'use strict';

//Arquivo correspondente ao main
const fs = require('fs');
const xlsx = require('node-xlsx');
//const Job = require('./model/job-model');
const Company = require('./model/company-model');
//requerer algo - primeiro ele tenta procurar nas bibliotecas padrâo
//do node, depois busca uma pasta no projeto e executa o index.js ou o que está no
//package.json
//para pegar algo no projeto, coloca-se o diretório

//como a propriedade exportada foi save, neste caso
//será importado o objeto e a funcao export

//var job = new Job('vaga para dev');

const dataXls = xlsx.parse(fs.readFileSync(`${__dirname}/data/empresas-sao-carlos.xlsx`));
//No node tem readFile -  não interrompe o processo, quando terminar chama um callback
//e o redFileSync faz com que aguarde para poder ser importado
//por isso, o correto é utilizar o sem sincronização

const companies = dataXls[0].data.slice(1);

//console.log(job);
//console.log(xlsx); //para verificar o que foi importado
companies.forEach((company) => { /*funcao anonima que não será exportada - Ver programação funcional, não cria-se espaços na memória e não pode ser utilizada como construtora */
  new Company(...company).save(); //os ... se chama spread operator ES6
});

console.log(Company.get());
