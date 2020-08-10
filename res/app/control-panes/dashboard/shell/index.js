require('./shell.css')

module.exports = angular.module('dmc.shell', [
  require('dmc/common-ui').name,
  require('gettext').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/dashboard/shell/shell.pug',
      require('./shell.pug')
    )
  }])
  .controller('ShellCtrl', require('./shell-controller'))
