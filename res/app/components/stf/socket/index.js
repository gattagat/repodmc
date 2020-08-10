module.exports = angular.module('dmc.socket', [
  //TODO: Refactor version update out to its own Ctrl
  require('dmc/app-state').name,
  require('dmc/common-ui/modals/version-update').name
])
  .factory('socket', require('./socket-service'))
