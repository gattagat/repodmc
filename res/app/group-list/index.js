/**
* Copyright © 2019 code initially contributed by Orange SA, authors: Denis Barbaron - Licensed under the Apache license 2.0
**/

require('./group-list.css')

module.exports = angular.module('group-list', [
  require('dmc/column-choice').name,
  require('dmc/groups').name,
  require('dmc/user').name,
  require('dmc/users').name,
  require('dmc/devices').name,
  require('dmc/settings').name,
  require('dmc/util/common').name,
  require('dmc/common-ui').name
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/groups', {
        template: require('./group-list.pug'),
        controller: 'GroupListCtrl'
      })
  }])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put(
      'group-list/stats/group-stats.pug', require('./stats/group-stats.pug')
    )
    $templateCache.put(
      'group-list/stats/group-quota-stats.pug', require('./stats/group-quota-stats.pug')
    )
    $templateCache.put(
      'group-list/groups/groups.pug', require('./groups/groups.pug')
    )
  }])
  .controller('GroupListCtrl', require('./group-list-controller'))
