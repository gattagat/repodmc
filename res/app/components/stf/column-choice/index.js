/**
* Copyright © 2019 code initially contributed by Orange SA, authors: Denis Barbaron - Licensed under the Apache license 2.0
**/

require('./column-choice.css')

module.exports = angular.module('dmc.column-choice', [
  require('dmc/common-ui').name
])
  .directive('dmcColumnChoice', require('./column-choice-directive'))


