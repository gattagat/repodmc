require('./device-list-details.css')

module.exports = angular.module('dmc.device-list.details', [
  require('dmc/device').name,
  require('dmc/user/group').name,
  require('dmc/common-ui').name,
  require('dmc/admin-mode').name,
  require('../column').name,
  require('../empty').name
])
  .directive('deviceListDetails', require('./device-list-details-directive'))
