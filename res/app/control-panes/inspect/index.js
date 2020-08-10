require('./inspect.css')

module.exports = angular.module('dmc.inspect', [

])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/inspect/inspect.pug',
      require('./inspect.pug')
    )
  }])
  .controller('InspectCtrl', require('./inspect-controller'))
