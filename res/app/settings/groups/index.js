/**
* Copyright © 2019 code initially contributed by Orange SA, authors: Denis Barbaron - Licensed under the Apache license 2.0
**/

require('./groups.css')

module.exports = angular.module('dmc.settings.groups', [
  require('dmc/users').name,
  require('dmc/devices').name,
  require('dmc/user').name,
  require('dmc/groups').name,
  require('dmc/settings').name,
  require('dmc/util/common').name,
  require('dmc/common-ui').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put(
      'settings/groups/groups.pug', require('./groups.pug')
    )
    $templateCache.put(
      'settings/groups/schedule/schedule.pug', require('./schedule/schedule.pug')
    )
    $templateCache.put(
      'settings/groups/devices/devices.pug', require('./devices/devices.pug')
    )
    $templateCache.put(
      'settings/groups/users/users.pug', require('./users/users.pug')
    )
    $templateCache.put(
      'settings/groups/conflicts/conflicts.pug', require('./conflicts/conflicts.pug')
    )
  }])
  .controller('GroupsCtrl', require('./groups-controller'))
  .filter('availableObjectsFilter', require('./filters/available-objects-filter'))
  .filter('groupObjectsFilter', require('./filters/group-objects-filter'))
