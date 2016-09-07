angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'TasksResourceController'
  });

  $routeProvider.otherwise({ redirectTo: '/' });

});
