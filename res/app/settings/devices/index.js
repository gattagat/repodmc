/**
* Copyright © 2019 code initially contributed by Orange SA, authors: Denis Barbaron - Licensed under the Apache license 2.0
**/

require('./devices.css')

module.exports = angular.module('dmc.settings.devices', [
  require('dmc/common-ui').name,
  require('dmc/settings').name,
  require('dmc/util/common').name,
  require('dmc/devices').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put(
      'settings/devices/devices.pug', require('./devices.pug')
    )
  }])
  .controller('DevicesCtrl', require('./devices-controller'))
