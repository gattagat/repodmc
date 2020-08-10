require('./info.css')

module.exports = angular.module('dmc.info', [
  require('dmc/angular-packery').name,
  require('dmc/common-ui/modals/lightbox-image').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/info/info.pug',
      require('./info.pug')
    )
  }])
  .controller('InfoCtrl', require('./info-controller'))
