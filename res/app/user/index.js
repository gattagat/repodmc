module.exports = angular.module('dmc.user-profile', [])
  .config(function($routeProvider) {

    $routeProvider
      .when('/user/:user*', {
        template: require('./user.pug')
      })
  })
  .controller('UserProfileCtrl', require('./user-controller'))
