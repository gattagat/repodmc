require('nine-bootstrap')

require('./cursor.css')
require('./small.css')
require('./dmc-styles.css')

module.exports = angular.module('layout', [
  require('dmc/landscape').name,
  require('dmc/basic-mode').name,
  require('ui-bootstrap').name,
  require('angular-borderlayout').name,
  require('dmc/common-ui').name,
  require('dmc/socket/socket-state').name,
  require('dmc/common-ui/modals/socket-disconnected').name,
  require('dmc/browser-info').name
])
  .config(['$uibTooltipProvider', function($uibTooltipProvider) {
    $uibTooltipProvider.options({
      appendToBody: true,
      animation: false
    })
  }])
  .controller('LayoutCtrl', require('./layout-controller'))
