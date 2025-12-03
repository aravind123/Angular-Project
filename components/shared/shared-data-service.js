angular.module('fm.services',[])
  .service('SharedDataService', ['$http', '$q', function($http, $q) {
    this.getJson = function() {

        console.log("hello");
      var defer = $q.defer();
      $http.get('mock/loan.json').then(
        function(res) { defer.resolve(res.data); },
        function(err) { defer.reject(err.data); }
      );
      return defer.promise;
    };
  }]);