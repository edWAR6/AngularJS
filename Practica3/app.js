angular.module('navigation', ['ngRoute'])

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('home', {
		url: '/',    
		templateUrl: 'views/home.html'
		// controller: 'HomeController'
	})

	.state('about', {
		url: '/about',    
		templateUrl: 'views/about.html'
		// controller: 'AboutController'
	});

	$routeProvider.otherwise({redirectTo: '/'});
});