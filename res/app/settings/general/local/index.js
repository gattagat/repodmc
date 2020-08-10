require('angular-bootstrap')

module.exports = angular.module('ui-local-settings', [
  require('dmc/settings').name,
  require('dmc/common-ui/modals/common').name,
  'ui.bootstrap'
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put(
      'settings/general/local/local-settings.pug'
    , require('./local-settings.pug')
    )
  }])
  .controller('LocalSettingsCtrl', require('./local-settings-controller'))
