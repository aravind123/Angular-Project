(function(){
    'use strict';
    var offset = 210;
    angular.module('myApp')
        .controller('DisclosureHistory', ['$scope', '$rootScope','DisclosureHistoryService','SharedDataService', Controller]).value('duScrollOffset', offset);

    function Controller ($scope, $rootScope, DisclosureHistoryService, SharedDataService) {

    	$scope.loading = true;
    	$scope.loadingError = false;
        $scope.fetchShared = function() {
            SharedDataService.getJson().then(function(res) {
            $scope.loading = false;
            $scope.loan = res;
        }, function(err) {
            $scope.loading = false;
            $scope.loadingError = true;
            console.log('Error loading disclosure history:', err);
        });
        }
        $scope.fetchService = function() {
            DisclosureHistoryService.getDisclosureHistory().then(function(res) {
                $scope.loading = false;
                $scope.loan = res;
            }, function(err) {
                $scope.loading = false;
                $scope.loadingError = true;
                console.log('Error loading disclosure history:', err);
            });

        }
      }
   
  
})();