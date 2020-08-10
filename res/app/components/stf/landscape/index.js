module.exports = angular.module('dmc.landscape', [
  require('dmc/browser-info').name
])
  .directive('landscape', require('./landscape-directive'))
