import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  'name' (){return faker.name.firstName();},
  'resume' (){return faker.lorem.sentence();}
});
