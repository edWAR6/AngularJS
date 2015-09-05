angular.module('demo.controllers', ['demo.services'])

.controller('HomeController', [ '$scope', function($scope) {
	$scope.name = 'Eduardo';

	var reload = function(){
		$scope.name	= '';
	};

	$scope.reload = reload;
}])

.controller('AboutController', ['$scope', 'Products', function($scope, Products) {
	$scope.products = Products.list();	

	$scope.save = function(){
		Products.add($scope.newproduct._id, $scope.newproduct._name);
	};
}]);