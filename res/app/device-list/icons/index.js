require('./device-list-icons.css')

module.exports = angular.module('dmc.device-list.icons', [
  require('gettext').name,
  require('dmc/user/group').name,
  require('dmc/common-ui').name,
  require('../column').name,
  require('../empty').name,
  require('dmc/standalone').name
])
  .directive('deviceListIcons', require('./device-list-icons-directive'))
