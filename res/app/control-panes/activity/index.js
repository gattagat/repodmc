require('./activity.css')

module.exports = angular.module('dmc.activity', [
  require('gettext').name,
  require('dmc/common-ui').name,
  require('dmc/timeline').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/activity/activity.pug',
      require('./activity.pug')
    )
  }])
  .controller('ActivityCtrl', require('./activity-controller'))
