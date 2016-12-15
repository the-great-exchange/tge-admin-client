import BaseController from '../../../controllers/base';

export default BaseController.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  people: [],

  resetProperties: function() {
    this.set('people', []);
  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
  }
  ////////////////////////////////////////
});
