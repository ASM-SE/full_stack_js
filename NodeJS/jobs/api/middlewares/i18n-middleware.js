'use strict';


const HEADER_PROPERT = 'accept-language';
const DIR_PATH = `${__dirname}/i18n/`;
const fs = require('fs');
const messages = {
  en: require('../i18n/en.json'),
  pt: require('../i18n/pt.json')
}

module.exports = (req, res, next) =>{
  console.log(req.headers[HEADER_PROPERT]);
//  console.log(messages);

  const _locale = req.headers[HEADER_PROPERT].split(',') || '';
 console.log(_locale.length);

  if(_locale){
    //Cria um array multidimensional 2x2 para salvar o locale e o quality
    var _localeAlone = [];
    for (var i = 0; i < _locale.length; i++) {
      _localeAlone[i] = _locale[i].split(';') || _locale[i];
    }

    var _quality = [];
    var re =  'q=';
    //Imprime o array multidimensional
    for (var i = 0; i < _localeAlone.length; i++) {
      for (var x = 0; x < _localeAlone[i].length; x++) {

          _localeAlone[i][x] = _localeAlone[i][x].replace(re, '');
          //Colocar aqui a chamada do arquivo e o next
          console.log("After="+_localeAlone[i][x]);
      }
    }

    for (var i = 0; i < _localeAlone.length; i++) {
      for (var x = 0; x < _localeAlone[i].length; x++) {
          console.log('Novo='+_localeAlone[i][x]);

      }
    }








    for (var i = 0; i < _locale.length; i++) {
      const files = {
        [_locale[i]]: `require(${DIR_PATH}${_locale[i]}.js)`,
      }
    //  console.log(files);
    }
  //  console.log("Tamanho array:" + _var);
  //  const _localeAlone = _locale[0].split(',') || _locale[0];
  //  console.log(_localeAlone);
    //const files = fs.readFileSync(`${__dirname}/i18n/empresas-sao-carlos.xlsx`)
  }
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
req.messages = messages.pt;

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
  return next(); //se não achar o arquivo de request dar mensagem que o locale não é suportado 440 - bad request
}
