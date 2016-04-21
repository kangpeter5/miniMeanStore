myApp.controller('productsController',function(productFactory, $scope){

	$scope.products = [];
	$scope.dup_msg = "";

	productFactory.getProducts(function(data){
		$scope.products = data;
		console.log('products from http: ', $scope.products);
	});

	$scope.addProduct = function(){
		if ($scope.isDuplicate()) {
			$scope.dup_msg = "product already exists, try again!";
		}else{
			$scope.new_product.created_at = new Date();
			productFactory.addProduct($scope.new_product, function(data){
				$scope.products = data;
				$scope.new_product = {};
			});
		}
	}

	$scope.isDuplicate = function(){
		for (var i = 0; i < $scope.products.length; i++) {
			if ($scope.new_product !== undefined) {
				if ($scope.new_product.name == $scope.products[i].name) {
					$scope.dup_msg = "product name is already taken!";
					return true;
				}
			}
		}
		return false;
	}
});