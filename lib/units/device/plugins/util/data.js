var syrup = require('dmc-syrup')
var deviceData = require('dmc-device-db')

var logger = require('../../../../util/logger')

module.exports = syrup.serial()
  .dependency(require('./identity'))
  .define(function(options, identity) {
    var log = logger.createLogger('device:plugins:data')

    function find() {
      var data = deviceData.find(identity)
      if (!data) {
        log.warn('Unable to find device data', identity)
      }
      return data
    }

    return find()
  })
