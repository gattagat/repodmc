module.exports = angular.module('dmc.include-cached', [

])
  .factory('CompileCacheService', require('./compile-cache-service'))
  .directive('ngIncludeCached', require('./include-cached-directive'))
