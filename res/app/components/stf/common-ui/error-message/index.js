require('./error-message.css')

module.exports = angular.module('dmc.error-message', [

])
  .directive('errorMessage', require('./error-message-directive'))
