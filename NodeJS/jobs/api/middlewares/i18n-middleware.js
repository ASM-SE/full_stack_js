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




    //Imprime o array multidimensional
          console.log(this.ordenaLocale(_localeAlone));
for (var i = 0; i < _localeAlone.length; i++) {

  for (var z = 0; z < _localeAlone[i].length; z++) {
  console.log("Inicial: "+_localeAlone[i][z]);
  }

}

}


function ordenaLocale(_localeAlone){
 let array_order = [];

    for (var i = 0; i < _localeAlone.length; i++) {

      if(_localeAlone[i][1] <= _localeAlone[i+1][1] && _localeAlone[i+1][1] != undefined){
        _aux_locale =  _localeAlone[i][0];
        _aux_quality = _localeAlone[i][1];
        _localeAlone[i][0] = _localeAlone[i+1][0];
        _localeAlone[i][1] = _localeAlone[i+1][1];
        _localeAlone[i+1][0] = _aux_locale;
        _localeAlone[i+1][1] = _aux_quality;

      };


    }
   array_order = _localeAlone;

  return array_order;
}

/*a[0][1] tem q? armazena a[0][0] e o quality a[0][1] na primeira posição ou é undefined? undefined é a prioridade - foi o que considerei
Entao tenta achar arquivo... achou, mostra pra usuario, não achou, manda mensagem para usuario e procura outro - continua a ler o array
a[1][1] tem q? aramazena a[1][0] e o quality a[1][1] na primeira posição ou é undefined? undefined é a prioridade
a[2][2] tem q? compara com o valor da primeira posição do novo array, se q=a[2][2] > q=a[1][1] aramazena a[2][0] e o quality a[2][1] na primeira posição e coloca o valor antigo na
nova posição ou é undefined? undefined é a prioridade
*/

//  console.log(_localeAlone[1][1] > _localeAlone[2][1]);










/*    for (var i = 0; i < _locale.length; i++) {
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
  return next(); //se não achar o arquivo de request dar mensagem que o locale não é suportado 440 - bad request
}
