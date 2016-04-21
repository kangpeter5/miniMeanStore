myApp.controller('dashboardsController', function(orderFactory, customerFactory, productFactory, $scope){
	$scope.orders = [];
	$scope.products = [];
	$scope.customers = [];

	customerFactory.recent_show(function(customers){
		console.log('all customers: ', customers);
		$scope.customers = customers;
	});

	productFactory.recent_show(function(products){
		console.log('all products: ', products);
		$scope.products = products;
	});

	orderFactory.recent_show(function(orders){
		console.log('all orders: ', orders);
		$scope.orders = orders;
	});

});