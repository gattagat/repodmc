require('./apps.css')

module.exports = angular.module('dmc.apps', [
  require('dmc/common-ui').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/dashboard/apps/apps.pug',
      require('./apps.pug')
    )
  }])
  .controller('AppsCtrl', require('./apps-controller'))
