import Ember from 'ember';

export default Ember.Controller.extend({

  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  session:       Ember.inject.service('session'),
  flashMessages: Ember.inject.service('flashMessages'),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  resetProperties() {
  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Computed Display Properties
  ////////////////////////////////////////
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Observers
  ////////////////////////////////////////
  addObservers() {

  },

  removeObservers() {

  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
  }
  ////////////////////////////////////////

});
