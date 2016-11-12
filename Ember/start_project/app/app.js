import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

//Arquivo de inicialização da aplicação
//Usa o ECMAScript 6
//Pasta public coloca as páginas públicas - imagens, 404, etc.
//Pasta test - gerenciamento de testes unitários - usa o key unit, pode utilizar outros como o jasmine.
//Resolver - resolução de dependências deles
//Pasta dist todo o conteúdo compilado - depois de compilar


Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
