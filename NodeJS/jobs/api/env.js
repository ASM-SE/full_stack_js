'use strinct';

const env = {};

env.server = {  //cria-se categorias para melhor dividir o código -
  port: process.env.SERVER_PORT  || 3000, //adiciona a variável do ambiente ou seta a porta como 3000 se a variável não for definida no sistema
  //process.env busca as variáveis de ambiente - se ela estiver configurada - esse código é para o windows

  //No linux passa uma porta somente para uma execução, com o comando: SERVER_PORT=4000 node ./bin/www.js //ou seja, muda a variável on-the-fly
}

module.exports = env;
