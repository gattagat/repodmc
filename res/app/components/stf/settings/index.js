module.exports = angular.module('dmc/settings', [
  require('dmc/user').name,
  require('dmc/socket').name
])
  .factory('SettingsService', require('./settings-service'))
