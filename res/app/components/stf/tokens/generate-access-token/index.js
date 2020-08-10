require('./generate-access-token.css')

module.exports = angular.module('dmc.tokens.generate-access-token', [

])
  .directive('generateAccessToken', require('./generate-access-token-directive'))
