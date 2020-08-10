module.exports = angular.module('dmc.add-adb-key-modal', [
  require('dmc/common-ui/modals/common').name
])
  .factory('AddAdbKeyModalService', require('./add-adb-key-modal-service'))
