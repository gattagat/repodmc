require('ng-file-upload')

module.exports = angular.module('dmc/storage', [
  'angularFileUpload'
])
  .factory('StorageService', require('./storage-service'))
