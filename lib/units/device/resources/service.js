var util = require('util')

var syrup = require('dmc-syrup')
var ProtoBuf = require('protobufjs')
var semver = require('semver')

var pathutil = require('../../../util/pathutil')
var streamutil = require('../../../util/streamutil')
var promiseutil = require('../../../util/promiseutil')
var logger = require('../../../util/logger')

module.exports = syrup.serial()
  .dependency(require('../support/adb'))
  .define(function(options, adb) {
    var log = logger.createLogger('device:resources:service')
    var builder = ProtoBuf.loadProtoFile(
      pathutil.vendor('dmcService/wire.proto'))

    var resource = {
      requiredVersion: '2.4.3'
    , pkg: 'jp.co.cyberagent.dmc'
    , main: 'jp.co.cyberagent.dmc.Agent'
    , apk: pathutil.vendor('dmcService/dmcService.apk')
    , wire: builder.build().jp.co.cyberagent.dmc.proto
    , builder: builder
    , startIntent: {
        action: 'jp.co.cyberagent.dmc.ACTION_START'
      , component: 'jp.co.cyberagent.dmc/.Service'
      }
    }

    function getPath() {
      return adb.shell(options.serial, ['pm', 'path', resource.pkg])
        .timeout(10000)
        .then(function(out) {
          return streamutil.findLine(out, (/^package:/))
            .timeout(15000)
            .then(function(line) {
              return line.substr(8)
            })
        })
    }

    function install() {
      log.info('Checking whether we need to install dmcService')
      return getPath()
        .then(function(installedPath) {
          log.info('Running version check')
          return adb.shell(options.serial, util.format(
            "export CLASSPATH='%s';" +
            " exec app_process /system/bin '%s' --version 2>/dev/null"
          , installedPath
          , resource.main
          ))
          .timeout(10000)
          .then(function(out) {
            return streamutil.readAll(out)
              .timeout(10000)
              .then(function(buffer) {
                var version = buffer.toString()
                if (semver.satisfies(version, resource.requiredVersion)) {
                  return installedPath
                }
                else {
                  throw new Error(util.format(
                    'Incompatible version %s'
                  , version
                  ))
                }
              })
          })
        })
        .catch(function() {
          log.info('Installing dmcService')
          // Uninstall first to make sure we don't have any certificate
          // issues.
          return adb.uninstall(options.serial, resource.pkg)
            .timeout(15000)
            .then(function() {
              return promiseutil.periodicNotify(
                  adb.install(options.serial, resource.apk)
                , 20000
                )
                .timeout(65000)
            })
            .progressed(function() {
              log.warn(
                'dmcService installation is taking a long time; ' +
                'perhaps you have to accept 3rd party app installation ' +
                'on the device?'
              )
            })
            .then(function() {
              return getPath()
            })
        })
    }

    return install()
      .then(function(path) {
        log.info('dmcService up to date')
        resource.path = path
        return resource
      })
  })
