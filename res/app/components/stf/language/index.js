module.exports = angular.module('dmc-language', [
  require('dmc/settings').name,
  require('gettext').name,
  require('dmc/app-state').name
])
  .factory('LanguageService', require('./language-service'))
  .provider('language', require('./language-provider'))
