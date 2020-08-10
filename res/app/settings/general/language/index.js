module.exports = angular.module('dmc-ui-language', [
  require('dmc/settings').name,
  require('dmc/language').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put(
      'settings/general/language/language.pug', require('./language.pug')
    )
  }])
  .controller('LanguageCtrl', require('./language-controller'))
