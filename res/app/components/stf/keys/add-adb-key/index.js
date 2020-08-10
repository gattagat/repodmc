require('./add-adb-key.css')

module.exports = angular.module('dmc.add-adb-key', [
  require('gettext').name,
  require('dmc/common-ui').name
])
  .directive('addAdbKey', require('./add-adb-key-directive'))
  .factory('AdbKeysService', require('./adb-keys-service'))

