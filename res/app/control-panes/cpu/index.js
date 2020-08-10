require('./cpu.css')

module.exports = angular.module('dmc.cpu', [

])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/cpu/cpu.pug',
      require('./cpu.pug')
    )
  }])
  .controller('CpuCtrl', require('./cpu-controller'))
