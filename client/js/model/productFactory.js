myApp.factory('productFactory', function($http){
	var factory = {};
	var products = [];

	factory.getProducts = function(callback){
		$http.get('/products').success(function(output){
			callback(output);
		});
	};

	factory.show_recent = function(callback){
		$http.get('/recent_products').success(function(output){
			callback(output);
		});
	};

	factory.addProduct = function(new_product, callback){
		$http.post('/addProduct', new_product).success(function(output){
			callback(output);
		})
	};
	return factory;
});