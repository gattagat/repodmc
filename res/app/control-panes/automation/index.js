module.exports = angular.module('dmc.automation', [
  require('./store-account').name,
  require('./device-settings').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put(
      'control-panes/automation/automation.pug'
      , require('./automation.pug')
    )
  }])
