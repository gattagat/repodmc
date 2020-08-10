require('./screenshots.css')

module.exports = angular.module('dmc.screenshots', [
  require('dmc/image-onload').name,
  require('dmc/settings').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/screenshots/screenshots.pug',
      require('./screenshots.pug')
    )
  }])
  .controller('ScreenshotsCtrl', require('./screenshots-controller'))
