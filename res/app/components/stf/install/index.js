module.exports = angular.module('dmc.install-service', [
  require('gettext').name
])
  .filter('installError', require('./install-error-filter'))
  .factory('InstallService', require('./install-service'))
