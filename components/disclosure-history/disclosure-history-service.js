angular.module('fm.services')
  .service('DisclosureHistoryService', ['$http', '$q', function($http, $q) {
    var self = this;

    self.getDisclosureHistory = function () {
      var defer = $q.defer();
      // For mock, ignore id and fetch static file
      $http.get('mock/disclosure-history.json').then(
        function(res) {
          defer.resolve(res.data);
        },
        function(err) {
          defer.reject(err.data);
        }
      );
      return defer.promise;
    };
  }]);