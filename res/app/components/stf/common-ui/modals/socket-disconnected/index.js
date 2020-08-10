module.exports = angular.module('dmc.socket-disconnected', [
  require('dmc/common-ui/modals/common').name
])
  .factory('SocketDisconnectedService', require('./socket-disconnected-service'))
