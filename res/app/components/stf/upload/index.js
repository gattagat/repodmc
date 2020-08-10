module.exports = angular.module('dmc.upload-service', [
  require('gettext').name
])
  .filter('uploadError', require('./upload-error-filter'))
