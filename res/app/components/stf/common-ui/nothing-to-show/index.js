require('./nothing-to-show.css')

module.exports = angular.module('dmc/common-ui/nothing-to-show', [])
  .directive('nothingToShow', require('./nothing-to-show-directive'))
