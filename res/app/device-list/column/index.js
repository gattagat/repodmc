/**
* Copyright © 2019 contains code contributed by Orange SA, authors: Denis Barbaron - Licensed under the Apache license 2.0
**/

module.exports = angular.module('dmc.device-list.column', [
  require('gettext').name,
  require('dmc/settings').name,
  require('dmc/app-state').name
])
  .service('DeviceColumnService', require('./device-column-service'))
