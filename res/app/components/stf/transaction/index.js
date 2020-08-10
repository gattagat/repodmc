module.exports = angular.module('dmc/transaction', [
  require('dmc/socket').name
])
  .constant('TransactionError', require('./transaction-error'))
  .factory('TransactionService', require('./transaction-service'))
