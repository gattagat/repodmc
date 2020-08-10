require('./usb.css')

module.exports = angular.module('dmc.usb', [

])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/advanced/usb/usb.pug',
      require('./usb.pug')
    )
  }])
  .controller('UsbCtrl', require('./usb-controller'))
