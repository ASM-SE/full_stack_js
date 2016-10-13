'use strict';


const HEADER_PROPERT = 'accept-language';
const DIR_PATH = `${__dirname}/i18n/`;
const fs = require('fs');
const messages = {
  en: require('../i18n/en.json'),
  pt: require('../i18n/pt.json')
};

module.exports = (req, res, next) =>{
  console.log(req.headers[HEADER_PROPERT]);

  const _locale = req.headers[HEADER_PROPERT].split(',') || '';
 //console.log(_locale.length);


  if(_locale){
    //Cria um array multidimensional 2x2 para salvar o locale e o quality
    var _localeAlone = [];
    var _aux_locale;
    var _aux_quality;


    for (var i = 0; i < _locale.length; i++) {
      _localeAlone[i] = _locale[i].split(';q=') || _locale[i];
    };

    //Imprime o array multidimensional
    for (var i = 0; i < _localeAlone.length; i++) {

      for (var x = 0; x < _localeAlone[i].length; x++){
        //Atribui prioridade ao locale sem quality
        if(_localeAlone[i].length === 1){
          _localeAlone[i][x+1] = 1;
        }
      }

    };

//Buble ordenação - OK!
/*var _ordenado;
do {
        _ordenado = false;
         for (var i = 0; i < _localeAlone.length-1; i++) {

           if(Number(_localeAlone[i][1]) < Number(_localeAlone[i+1][1])){
             _aux_locale =  _localeAlone[i][0];
             _aux_quality = _localeAlone[i][1];
             _localeAlone[i][0] = _localeAlone[i+1][0];
             _localeAlone[i][1] = _localeAlone[i+1][1];
             _localeAlone[i+1][0] = _aux_locale;
             _localeAlone[i+1][1] = _aux_quality;
            _ordenado = true;
           };



       };
   } while (_ordenado);*/


//Sort Ordenação - OK!
var _order_array = _localeAlone.sort(compareSecondColumn);
function compareSecondColumn(a, b) {
    if (Number(a[1]) === Number(b[1])) {
        return 0;
    }
    else {
        return (Number(a[1]) > Number(b[1])) ? -1 : 1;
    }
}
console.log(_order_array);


//Imprime o array multidimensional
var _teste;
var files = {};
for (var i = 0; i < _order_array.length; i++) {
  for (var z = 0; z < _order_array[i].length; z++) {

  if(isNaN(_order_array[i][z])){
  //  files = fs.readFileSync(`${DIR_PATH}${_order_array[i][z]}.json`)
  //add(files, `${_order_array[i][z]}`, `require('${DIR_PATH}${_order_array[i][z]}.js')` );
  files = {
  [_localeAlone[i][z]] : `require('${DIR_PATH}${_localeAlone[i][z]}.json')`,

  }
  req.files = files.[_localeAlone[i][z]];
    return next();
//  console.log(`${DIR_PATH}${_order_array[i][z]}.json`);

  }

};
};
console.log(files);

}




/*

files = {
[_localeAlone[i][z]] : `require('${DIR_PATH}${_localeAlone[i][z]}.js')`,

}
for (var i = 0; i < _locale.length; i++) {
      const files = {
        [_locale[i]]: `require(${DIR_PATH}${_locale[i]}.js)`,
      }
    //  console.log(files);
  }*/
  //  console.log("Tamanho array:" + _var);
  //  const _localeAlone = _locale[0].split(',') || _locale[0];
  //  console.log(_localeAlone);
    //const files = fs.readFileSync(`${__dirname}/i18n/empresas-sao-carlos.xlsx`)

//  let _locale

//const files = fs.readFileSync(`${__dirname}/i18n/empresas-sao-carlos.xlsx`)



//divide o cabecalho e vê quantos locales foram enviados
//procura o primeiro locale nos arquivos da pasta i18n
//se não encontrar fala que o idiona não é suportado e vai par ao próximo
//o proximo deverá então verificar o quality para indicar qual linguagem vai ser considerada
//levar em consideração a passagem de dois ou mais parâmetros


//req.messages = localeSelecionado;
//Não precisa dar parse nos arquivos do JSON

//req.messages = messages.en;
//req.messages = messages.pt;

//Se for passado no accept-language en e não suportar, pegar o pt e falar que en não é suportado
//levar em consideração também o quality q=0.8 para ordernar com um for a prioridade
//como indicação criar uma classe que auxilie o processa
//


//localoes separados por ',' e propriedades do locale separados por ':'
//'accept-language':
//'pt-BR,
//pt;q=0.8,
//en-US;q=0.6,
//en;q=0.4'
 //se não achar o arquivo de request dar mensagem que o locale não é suportado 440 - bad request
}
