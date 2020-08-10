require('./device-list-stats.css')

module.exports = angular.module('dmc.device-list.stats', [
  require('dmc/user').name
])
  .directive('deviceListStats', require('./device-list-stats-directive'))
