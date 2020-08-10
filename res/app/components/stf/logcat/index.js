module.exports = angular.module('dmc.logcat', [
  require('dmc/filter-string').name,
  require('dmc/socket').name
])
  .factory('LogcatService', require('./logcat-service'))
