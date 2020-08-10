module.exports = angular.module('dmc.version-update-service', [
  require('dmc/common-ui/modals/common').name,
  require('ui-bootstrap').name
])
  .factory('VersionUpdateService', require('./version-update-service'))
