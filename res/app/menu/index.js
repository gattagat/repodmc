/**
* Copyright © 2019 contains code contributed by Orange SA, authors: Denis Barbaron - Licensed under the Apache license 2.0
**/

require('./menu.css')
require('angular-cookies')

module.exports = angular.module('dmc.menu', [
  'ngCookies',
  require('dmc/socket').name,
  require('dmc/util/common').name,
  require('dmc/nav-menu').name,
  require('dmc/settings').name,
  require('dmc/common-ui/modals/external-url-modal').name,
  require('dmc/native-url').name
])
  .controller('MenuCtrl', require('./menu-controller'))
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('menu.pug', require('./menu.pug'))
  }])
