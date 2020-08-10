require('./basic-mode.css')

module.exports = angular.module('dmc.basic-mode', [
])
  .directive('basicMode', require('./basic-mode-directive'))
