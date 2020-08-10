require('angular-cookies')

module.exports = angular.module('dmc.enable-autofill', [
  'ngCookies'
])
  .directive('enableAutofill', require('./enable-autofill-directive'))
