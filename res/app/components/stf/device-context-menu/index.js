require('./device-context-menu.css')

module.exports = angular.module('dmc.device-context-menu', [
  require('ng-context-menu').name
])
  .directive('deviceContextMenu', require('./device-context-menu-directive'))
