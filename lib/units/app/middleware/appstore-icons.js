var serveStatic = require('serve-static')

var pathutil = require('../../../util/pathutil')

module.exports = function() {
  return serveStatic(
    pathutil.root('node_modules/dmc-appstore-db/dist')
    , {
      maxAge: '30d'
    }
  )
}
