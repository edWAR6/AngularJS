angular.module('callbacks.controllers', ['callbacks.services'])

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

.controller('UsersController', ['$scope', 'Users', function($scope, Users) {	
	$scope.users = [];

	Users.addObserver(function(user){
		$scope.users.push(user);
		$scope.$apply();
	});
}]);