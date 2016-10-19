import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({

  name:        attr('string'),
  email:       attr('string'),
  phoneNumber: attr('string'),
  location:    attr('string'),
  school:      attr('string'),
  ministry:    attr('string')

});
