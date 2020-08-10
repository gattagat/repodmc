/**
* Copyright © 2019 code initially contributed by Orange SA, authors: Denis Barbaron - Licensed under the Apache license 2.0
**/

module.exports = angular.module('dmc.users', [
  require('dmc/util/common').name
])
.factory('UsersService', require('./users-service'))
