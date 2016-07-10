/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    lessOptions: { paths: [ 'bower_components/bootstrap/less', 'bower_components/jasny-bootstrap/less' ] }
  });

  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import(app.bowerDirectory + '/bootstrap/fonts/glyphicons-halflings-regular.woff', { destDir: '/fonts' });
  app.import(app.bowerDirectory + '/bootstrap/fonts/glyphicons-halflings-regular.woff2', { destDir: '/fonts' });
  return app.toTree();
};
