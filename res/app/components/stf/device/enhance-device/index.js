module.exports = angular.module('dmc/device/enhance-device', [
  require('dmc/app-state').name
])
  .factory('EnhanceDeviceService', require('./enhance-device-service'))
