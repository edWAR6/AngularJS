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
}])

.controller('ProductsController', ['$scope', 'Products', function($scope, Products){
	$scope.products = {};
	list();

	function list(){
		Products.list().then(function(products){
			$scope.products = products;
			$scope.$apply();
		}, function(error){
			$scope.error = error;
		});
	};

	$scope.save = function(){
		Products.add($scope.newproduct).then(function(){
			$scope.message = 'Success!!!';
			list();
		}, function(error){
			$scope.error = error;
		});
	};
}]);