'use strinct';

const env = {};

env.server = {  //cria-se categorias para melhor dividir o código -
  port: 3000,
  //port: process.env.SERVER_PORT  || 3000, //adiciona a variável do ambiente ou seta a porta como 3000 se a variável não for definida no sistema
  //process.env busca as variáveis de ambiente - se ela estiver configurada - esse código é para o windows

  //No linux passa uma porta somente para uma execução, com o comando: SERVER_PORT=4000 node ./bin/www.js //ou seja, muda a variável on-the-fly
};

env.database = {
  //configurando para utilizar o banco de dados do mlab.com
  //uri: process.env.DATABASE_URI  || 'mongodb://localhost:27017/jobs-db', //colocar o nome do banco, no caso jobs-db
  uri: process.env.DATABASE_URI  || '@ds037165.mlab.com:37165/jobs',
  credentials: {
    user: process.env.DATABASE_URI || 'jobsuser',
    pass: process.env.DATABASE_URI || '78a85s',
  }
};

module.exports = env;
