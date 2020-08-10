module.exports = angular.module('dmc/socket/socket-state', [
  require('dmc/socket').name,
  require('dmc/common-ui/safe-apply').name,
  require('dmc/common-ui/notifications').name,
  require('dmc/common-ui/refresh-page').name,
  require('dmc/common-ui/modals/socket-disconnected').name
])
  .directive('socketState', require('./socket-state-directive'))
  .config([
    '$provide', function($provide) {
      return $provide.decorator('$rootScope', [
        '$delegate', function($delegate) {
          $delegate.safeApply = function(fn) {
            var phase = $delegate.$$phase
            if (phase === '$apply' || phase === '$digest') {
              if (fn && typeof fn === 'function') {
                fn()
              }
            } else {
              $delegate.$apply(fn)
            }
          }
          return $delegate
        }
      ])
    }
  ])
