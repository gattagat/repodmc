require('./access-tokens.css')

module.exports = angular.module('dmc.settings.keys.access-tokens', [
  require('dmc/socket').name,
  require('dmc/common-ui').name,
  require('dmc/tokens').name,
  require('dmc/tokens/generate-access-token').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put(
      'settings/keys/access-tokens/access-tokens.pug', require('./access-tokens.pug')
    )
  }])
  .controller('AccessTokensCtrl', require('./access-tokens-controller'))
