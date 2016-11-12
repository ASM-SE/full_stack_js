import Ember from 'ember';

export default Ember.Route.extend({
  mode(){
    return this.store.createRecord('book');
  }
});
