import DS from 'ember-data';

export default DS.Model.extend({

  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  name:      DS.attr('string'),
  email:     DS.attr('string'),
  password:  DS.attr('string')

});
