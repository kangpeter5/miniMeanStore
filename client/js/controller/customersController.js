myApp.controller('customersController', function(customerFactory, $scope){
	$scope.customers = [];
	$scope.dup_msg = "";
	
	customerFactory.getCustomers(function(data){
		$scope.customers = data;
		console.log('customers from http: ', $scope.customers);
	});

	$scope.addCustomer = function(){
		if ($scope.isDuplicate()) {
			$scope.dup_msg = "that name is already taken, try again!";
		}else{
			$scope.new_customer.created_at = new Date();
			customerFactory.addCustomer($scope.new_customer, function(data){
				$scope.customers = data;
				$scope.new_customer = {};
			});
		}
	}

	$scope.deleteCustomer = function(customer_id){
		console.log("this is the CLIENT customersController delete function: "+ customer_id);
		customerFactory.deleteCustomer(customer_id, function(data){
			console.log("this is the CLIENT customersController delete function: "+ customer_id);
			$scope.customers = data;
		});
	}

	$scope.isDuplicate = function(){
		for (var i = 0; i < $scope.customers.length; i++) {
			if ($scope.new_customer !== undefined) {
				if ($scope.new_customer.name == $scope.customers[i].name) {
					$scope.dup_msg = "name is already taken!"
					return true;
				}
			}
		}
		return false;
	}
})