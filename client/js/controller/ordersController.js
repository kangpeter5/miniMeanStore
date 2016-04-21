myApp.controller('ordersController', function(orderFactory, customerFactory, productFactory, $scope){

	$scope.orders = [];
	$scope.products = [];
	$scope.users = [];
	$scope.new_order = {};
	// $scope.user_names = [];
	$scope.qty_errors = false;

	orderFactory.getOrders(function(data){
		$scope.orders = data;
	});

	customerFactory.getCustomers(function(data){
		$scope.users = data;
		$scope.new_order.name = $scope.users[0].name;
		// for (var i = 0; i < $scope.users.length; i++) {
		// 	$scope.user_names.push($scope.users[i].name);
		// }
	});

	productFactory.getProducts(function(data){
		$scope.products = data;
		// $scope.new_order.product = $scope.products[0].name;
	})

	$scope.addOrder = function(){
		$scope.new_order.created_at = new Date();
		//check to see if qty is larager than the order
		$scope.qty = $scope.new_order.product.qty;
		//keep _id to update qty of product
		$scope.new_order.product_id = $scope.new_order.product._id;

		// console.log("ordersController new_order: "+ $scope.new_order);
		
		if ($scope.qty < $scope.new_order.qty) {
			$scope.qty_errors = true;
			$scope.qty_msg = 'The product has ' + $scope.qty + ' left!';
		}else{
			orderFactory.addOrder($scope.new_order, function(data){
				$scope.orders = data;
				$scope.new_order = {};
				$scope.qty_errors = false;
			});
		}
	}
});