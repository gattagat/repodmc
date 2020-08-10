require('./device-list.css')

module.exports = angular.module('device-list', [
  require('angular-xeditable').name,
  require('dmc/device').name,
  require('dmc/user/group').name,
  require('dmc/control').name,
  require('dmc/common-ui').name,
  require('dmc/settings').name,
  require('./column').name,
  require('./details').name,
  require('./empty').name,
  require('./icons').name,
  require('./stats').name,
  require('./customize').name,
  require('./search').name
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/devices', {
        template: require('./device-list.pug'),
        controller: 'DeviceListCtrl'
      })
  }])
  .run(function(editableOptions) {
    // bootstrap3 theme for xeditables
    editableOptions.theme = 'bs3'
  })
  .controller('DeviceListCtrl', require('./device-list-controller'))
