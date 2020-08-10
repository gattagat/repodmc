require('./resources.css')

module.exports = angular.module('dmc.resources', [

])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/resources/resources.pug',
      require('./resources.pug')
    )
  }])
  .controller('ResourcesCtrl', require('./resources-controller'))
