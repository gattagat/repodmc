module.exports = angular.module('dmc.tokens', [
  require('./generate-access-token').name
])
.factory('AccessTokenService', require('./access-token-service'))
