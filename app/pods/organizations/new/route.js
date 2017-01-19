import BaseRoute from '../../../routes/base';

export default BaseRoute.extend({
  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  typeKey:            'organization',
  unloadOnDeactivate: true,
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Lifecycle hooks
  ////////////////////////////////////////
  model() {
    return this._createRecord();
  }
  ////////////////////////////////////////
});


