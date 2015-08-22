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

.controller('AboutController', ['$scope', function($scope) {
	var simple = {
		name: 'Eduardo',
		phone: 71129849,
		call: function(){
			console.log('llamando...');			
		}
	};

	var complex = new Complex();

	function Complex(){
		this.name = 'Eduardo';
		this.phone = 71129849;
		this.call = function(){
			console.log('llamando...');
		};		

		function clean(){
			console.log('cleaning...');
			function done(){
				console.log('done...');
			};
			done();
		};

		var index = 0;
		var tostring = function(){
			console.log('esto es privado');
		};

		this.getIndex = function(){
			return index;
		};

		// return function(){
		// 	this.lastname = 'Oviedo';
		// };

		// return {
		// 	adress: 'Bla bla bla',
		// 	age: 15,
		// 	print: function(){
		// 		console.log('printing');
		// 	}
		// };
	};

	console.log(simple.name);
	simple.close = function(wasd){
		console.log(wasd);
	};	
	
	console.log(complex.name);

	//Manera recomendada de OOP en JS

	var Client = function(id, name, phone, list){
		var id = id;		
		this.name = name;
		this.phone = phone;
		var listar = list;

		function log(message){			
			console.log(message);
			listar(this.phone);
		};

		var update = function(){			
			// Código de update...
		};

		this.save = function(){
			// Código de guardar...
		};

		return {
			update: update,
			commit: save
		}
	};

	Client.commit();
	console.log(Client.name);  // ''
	Client.name = 'Daniel';
	console.log(Client.name);  // 'Daniel'

	var client1 = Client(1, 'Daniel', 12345678);
	var client2 = Client(2, 'Fulanito', 09876543);
	var client3 = Client(3, 'Fulanito', 09876543);
	var client4 = Client(4, 'Fulana');

	var client5 = Client(5, 'Felipe', 11112222, function(value){
		console.log(value);
	});







}]);