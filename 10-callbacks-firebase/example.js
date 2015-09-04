//Callback

console.log('Alpha');
for (var i = 0; i < Things.length; i++) {
	console.log(Things[i]);
};
console.log('Omega');

// No Callback
// Main
function(ProductService){
	var list = ProductService.list();
	console.log(list[0]);
};

var ProductService = function(){
	var list = function(){
		var myList = [
			{id: 1, name: 'Coke'},
			{id: 2, name: 'Pepsi'},
			{id: 3, name: 'Redbull'}
		];
		return myList;
	};
	return{
		list: list
	};
};

// Using callback :)
// Main
function(ProductService){
	var callback = function(list){
		console.log('Done');
		console.log(list[0].name);
	};
	ProductService.list(callback);
	console.log('Just called to list');
};

var ProductService = function(){
	var list = function(callback){
		var myList = [
			{id: 1, name: 'Coke'},
			{id: 2, name: 'Pepsi'},
			{id: 3, name: 'Redbull'}
		];
		callback(myList);
	};
	return{
		list: list
	};
};

// Using callback :D
// Main
function(ProductService){
	ProductService.list(function(list){
		console.log('Done');
		console.log(list[0].name);
	});
	//console.log('Just called to list');
};

var ProductService = function(){
	var list = function(callback){
		var myList = [
			{id: 1, name: 'Coke'},
			{id: 2, name: 'Pepsi'},
			{id: 3, name: 'Redbull'}
		];
		callback(myList);
	};
	return{
		list: list
	};
};

// Ajax
$.Ajax('http://loquesea.com/productos', function(){

});

$.Ajax({
	url: 'www.loquesea.com',
	method: 'GET',
	type: 'application/json' // mimetype,
	success: function(data){
		//...
	},
	error: function(error){
		//...
	}
});







