import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {id:1, name: "Harry Potter e a Pedra Filosofal"},
      {id:2, name: "Harry Potter e a Crinaça Amaldiçoada"},
      {id:3, name: "Harry Potter e o Prisioneiro de Askaban"}            
    ]
  }
});
