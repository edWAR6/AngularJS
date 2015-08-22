angular.module('controllers.controllers', [])

.controller('HomeController', [ '$scope', function($scope) {
	$scope.name = 'Eduardo';

	var reload = function(){
		$scope.name	= '';
	};

	$scope.reload = reload;
}])

.controller('AboutController', function() {

});