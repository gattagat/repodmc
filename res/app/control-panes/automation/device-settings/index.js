require('./device-settings.css')

module.exports = angular.module('dmc.device-settings', [

])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/automation/device-settings/device-settings.pug',
      require('./device-settings.pug')
    )
  }])
  .controller('DeviceSettingsCtrl', require('./device-settings-controller'))
