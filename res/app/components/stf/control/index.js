module.exports = angular.module('dmc/control', [
  require('dmc/socket').name,
  require('dmc/transaction').name,
  require('dmc/keycodes').name
])
  .factory('ControlService', require('./control-service'))
