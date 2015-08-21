angular.module('jsoop.controllers', [])

.controller('HomeController', ['$scope', function($scope) {
	var hello = function(message){
		console.log(message);
	};

	$scope.model = {
		name: 'Fulano',
		phone: 12345678,
		active: false,
		print: function(){
			console.log('hola mundo');
		},
		say: hello 
	};	
}])

.controller('AboutController', ['$scope' function($scope) {
	
}]);