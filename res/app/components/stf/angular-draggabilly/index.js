var draggabilly = require('draggabilly')

module.exports = angular.module('dmc.angular-draggabilly', [

])
  .factory('DraggabillyService', function() {
    return draggabilly
  })
  .directive('angularDraggabilly', require('./angular-draggabilly-directive'))
