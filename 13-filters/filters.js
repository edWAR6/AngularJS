angular.module('filters.customfilters', [])

.filter('wordcount', function(){
	return function(input, optional1){
		var length = input.length;
		return input +' '+ length;
	};
});
