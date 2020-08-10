/**
* Copyright © 2019 code initially contributed by Orange SA, authors: Denis Barbaron - Licensed under the Apache license 2.0
**/

require('./users.css')

module.exports = angular.module('dmc.settings.users', [
  require('dmc/app-state').name,
  require('dmc/settings').name,
  require('dmc/util/common').name,
  require('dmc/users').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put(
      'settings/users/users.pug', require('./users.pug')
    )
  }])
  .controller('UsersCtrl', require('./users-controller'))
