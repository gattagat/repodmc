/**
* Copyright © 2019 code initially contributed by Orange SA, authors: Denis Barbaron - Licensed under the Apache license 2.0
**/

module.exports = angular.module('dmc.settings.general.email-address-separator', [
  require('dmc/settings').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put(
      'settings/general/email-address-separator/email-address-separator.pug'
    , require('./email-address-separator.pug')
    )
  }])
  .controller('EmailAddressSeparatorCtrl', require('./email-address-separator-controller'))
