angular.module('gettext').run(['gettextCatalog', function(gettextCatalog) {
  // Load all supported languages
  angular.forEach(require('./langs'), function(value, key) {
    if (key !== 'en') {
      gettextCatalog.setStrings(key,
        require('./translations/dmc.' + key + '.json')[key])
    }
  })
}])

module.exports = angular.module('dmc/lang', [
  'gettext'
])
