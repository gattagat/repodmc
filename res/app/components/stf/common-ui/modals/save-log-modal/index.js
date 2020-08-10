require('./save-log.css')

require('angular-route')

module.exports = angular.module('dmc.save-log-message', [
  require('dmc/common-ui/modals/common').name,
  'ngRoute'
])
  .factory('SaveLogService', require('./save-log-service'))
