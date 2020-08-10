require('./install.css')

require('ng-file-upload')

module.exports = angular.module('dmc.install', [
  'angularFileUpload',
  require('./activities').name,
  require('dmc/settings').name,
  require('dmc/storage').name,
  require('dmc/install').name,
  require('dmc/upload').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/dashboard/install/install.pug',
      require('./install.pug')
    )
  }])
  .controller('InstallCtrl', require('./install-controller'))
