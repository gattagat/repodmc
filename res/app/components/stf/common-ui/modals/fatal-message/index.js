require('angular-route')

module.exports = angular.module('dmc.fatal-message', [
  require('dmc/common-ui/modals/common').name,
  'ngRoute'
])
  .factory('FatalMessageService', require('./fatal-message-service'))
