require('./input.css')

module.exports = angular.module('dmc.advanced.input', [
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/advanced/input/input.pug',
      require('./input.pug')
    )
  }])
  .controller('InputAdvancedCtrl', require('./input-controller'))
