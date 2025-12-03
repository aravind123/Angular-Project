var app = angular.module('myApp',['ngRoute','fm.services']);
//app.requires.push('ngRoute');
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('!'); 
  $routeProvider
    .when('/', {
      templateUrl: 'components/home/home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'components/about/about.html',
      controller: 'AboutController'
    })
    .when('/disclosure-history', {
      templateUrl: 'components/disclosure-history/disclosure-history-view.html',
      controller: 'DisclosureHistory'
    })
    .otherwise({
      redirectTo: '/'
    });
});
