angular.module('filters.controllers', ['filters.customfilters'])

.controller('HomeController', ['$scope', '$filter', function($scope, $filter) {
	$scope.lowertext = 'hola mundo de minúsculas...';
	$scope.uppertext = 'HOLA MUNDO DE MAYUSCULAS...';
	$scope.price = 49.99;
	$scope.grade = 85.3456123;

	var numbervalue = $filter('number')(100.55, 3);
	$scope.numbervalue = numbervalue;

	$scope.dateCommon = "2014-10-19";
	$scope.dateUTC = "2014-10-19T06:46:00+00:00";

	$scope.longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	$scope.customvalue = 'Hola Mundo';
}])

.controller('AboutController', function() {

});