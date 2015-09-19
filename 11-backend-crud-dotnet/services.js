angular.module('demo.services', [])

.factory('Products', ['$http', function($http) {

	var add = function(newproduct){		
		return new Promise(function(sucess, fail){
			$http.post('http://backenddotnet.azurewebsites.net/api/products', newproduct).then(function(result){
					sucess();
				}, function(error){
					console.error(error);
					fail(error);
				}
			);
		});
	};

	var list = function(){
		return new Promise(function(sucess, fail){
			$http.get('http://backenddotnet.azurewebsites.net/api/products').then(
				function(result){
					sucess(result.data);
				}, function(error){
					console.error(error);
					fail(error);
				}
			);
		});			
	};

	return {
		add: add,
		list: list
	};
}]);

