module.exports = angular.module('dmc/group', [
  require('dmc/socket').name,
  require('dmc/user').name,
  require('dmc/transaction').name
])
  .factory('GroupService', require('./group-service'))
