module.exports = angular.module('dmc/user', [
  require('dmc/socket').name,
  require('dmc/common-ui').name,
  require('dmc/app-state').name
])
  .factory('UserService', require('./user-service'))
