import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return { id: '1000',  email: '',  name: ''};
  },
  activate: function() {
    this.controllerFor('users').set('outletActive', true);
  },
  deactivate: function() {
    this.controllerFor('users').set('outletActive', false);
  }
});