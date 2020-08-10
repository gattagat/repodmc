require('./logs.less')

module.exports = angular.module('dmc.logs', [
  require('dmc/logcat').name,
  require('dmc/logcat-table').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/logs/logs.pug',
      require('./logs.pug')
    )
  }])
  .controller('LogsCtrl', require('./logs-controller'))
