require('./screen.css')

module.exports = angular.module('dmc/screen', [
  require('dmc/screen/scaling').name
, require('dmc/util/vendor').name
, require('dmc/page-visibility').name
, require('dmc/browser-info').name
, require('dmc/common-ui/nothing-to-show').name
])
  .directive('deviceScreen', require('./screen-directive'))
  .controller('DeviceScreenCtrl', require('./screen-controller'))
