module.exports = angular.module('dmc.keycodes', [

])
  .factory('KeycodesMapped', function() {
    return require('./mapped/index.json')
  })

// Not used for now:
//
//  .factory('KeycodesAndroid', function () {
//    return require('./android/index.json')
//  })
//  .factory('KeycodesJS', function () {
//    return require('./android/index.json')
//  })
//  .factory('KeycodesService', require('./keycodes-service'))
