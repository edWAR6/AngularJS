angular.module('demo', ['ngRoute', 'demo.controllers', 'demo.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.

	when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
	}).
	when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutController'
  }).
  when('/products', {
    templateUrl: 'views/products.html',
    controller: 'ProductsController'
  }).
	otherwise({
  	redirectTo: '/'
	});
}]);