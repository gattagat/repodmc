require('angular-hotkeys')
module.exports = angular.module('dmc.scoped-hotkeys', [
  'cfp.hotkeys'
])
  .factory('ScopedHotkeysService', require('./scoped-hotkeys-service'))
