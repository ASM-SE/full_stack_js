import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', {path: 'livros'}); //path indica internalionalização, mudando a rota
  this.route('book', {path: 'livro/:id'}) //passa o id para poder retornar o livro;
});

export default Router;
