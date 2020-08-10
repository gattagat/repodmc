require('./port-forwarding.css')

module.exports = angular.module('dmc.port-forwarding', [
  require('dmc/common-ui/table').name,
  require('dmc/settings').name,
  require('gettext').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put(
      'control-panes/advanced/port-forwarding/port-forwarding.pug',
      require('./port-forwarding.pug')
    )
  }])
  .controller('PortForwardingCtrl', require('./port-forwarding-controller'))
