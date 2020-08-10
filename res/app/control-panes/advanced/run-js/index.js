require('./run-js.css')

module.exports = angular.module('dmc.run-js', [

])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/advanced/run-js/run-js.pug',
      require('./run-js.pug')
    )
  }])
  .controller('RunJsCtrl', require('./run-js-controller'))
