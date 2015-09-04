angular.module('callbacks.services', [])

.factory('Products', function() {
	var products = [
		{
			_id: 1,
			_name: 'Coca Cola'
		},
		{
			_id: 2,
			_name: 'Pepsi'
		}
	];

	var add = function(id, name){
		//products.push({_id: id, _name: name});
		var product = {
			_id: id,
			_name: name
		};
		products.push(product);
	};

	var list = function(){
		return products;
	};

	return {
		add: add,
		list: list
	};
})

.factory('Users', ['$firebase', function($firebase) {
	var observers = [];
	var ref = new Firebase("https://inventorydemo123.firebaseio.com/Users");

	ref.on('child_added', function(snapshot){		
		callObservers(snapshot.val());
	});

	var addObserver = function(observer){
		observers.push(observer);
	};

	var callObservers = function(user){		
		angular.forEach(observers, function(callback){
	      	callback(user);
	    });
	};

	return {
		addObserver: addObserver
	};
}]);
