require('./adb-keys.css')

module.exports = angular.module('dmc.settings.keys.adb-keys', [
  require('dmc/user').name,
  require('dmc/common-ui').name,
  require('dmc/keys/add-adb-key').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put(
      'settings/keys/adb-keys/adb-keys.pug', require('./adb-keys.pug')
    )
  }])
  .controller('AdbKeysCtrl', require('./adb-keys-controller'))
