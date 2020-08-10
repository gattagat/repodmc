/**
* Copyright © 2019 contains code contributed by Orange SA, authors: Denis Barbaron - Licensed under the Apache license 2.0
**/

require('./signin.css')

module.exports = angular.module('dmc.signin', [
  require('dmc/util/common').name,
  require('dmc/common-ui').name
])
  .config(function($routeProvider) {
    $routeProvider
      .when('/auth/ldap/', {
        template: require('./signin.pug')
      })
  })
  .controller('SignInCtrl', require('./signin-controller'))
