require('./store-account.css')
require('angular-ladda')

module.exports = angular.module('dmc.store-account', [
  'angular-ladda',
  require('dmc/common-ui/table').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/automation/store-account/store-account.pug',
      require('./store-account.pug')
    )
  }])
  .controller('StoreAccountCtrl', require('./store-account-controller'))
