require('./standalone.css')

module.exports = angular.module('device-control.standalone', [
  require('dmc/device').name,
  require('dmc/control').name,
  require('dmc/screen').name,
  require('dmc/settings').name,
  require('dmc/screen/scaling').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/device-control/standalone/standalone.pug',
      require('./standalone.pug')
    )
  }])
  .controller('StandaloneCtrl', require('./standalone-controller'))
  .factory('StandaloneService', require('./standalone-service'))
  .directive('standalone', require('./standalone-directive'))
