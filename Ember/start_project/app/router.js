import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', {path: 'livros'}, function() {
    this.route('new');//adicionado automaticamente 
  }); //path indica internalionalização, mudando a rota
  this.route('book', {path: 'livro/:id'}) //passa o id para poder retornar o livro; http://localhost:4200/livro/:1
});

export default Router;
