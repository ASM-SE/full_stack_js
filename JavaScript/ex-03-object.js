'use strict';

let pessoa = {
  nome : 'Anderson',
  sobrenome : 'da Silva Marcolino',
  idade : 30
};

console.log(pessoa);

for (let prop in pessoa) {
  console.log(prop);
}

for (let prop in pessoa) {
  console.log(prop, ':', pessoa[prop]);
}
