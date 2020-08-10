/**
* Copyright © 2019 code initially contributed by Orange SA, authors: Denis Barbaron - Licensed under the Apache license 2.0
**/

require('./pagination.css')

module.exports = angular.module('dmc.pagination', [
])
  .filter('pagedObjectsFilter', require('./pagination-filter'))
  .directive('dmcPager', require('./pagination-directive'))
  .factory('ItemsPerPageOptionsService', require('./pagination-service'))
  
