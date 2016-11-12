import Ember from 'ember';

export default Ember.Controller.extend({
  nameWithId: Ember.computed('model.id', 'model.name', function(){
    return `${this.get('model.id')} - ${this.get('model.name')}`
  })
});
