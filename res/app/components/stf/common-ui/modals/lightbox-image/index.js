require('./lightbox-image.css')

module.exports = angular.module('dmc.lightbox-image', [
  require('dmc/common-ui/modals/common').name
])
  .factory('LightboxImageService', require('./lightbox-image-service'))
