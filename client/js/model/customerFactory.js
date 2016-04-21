var myApp = angular.module('myApp', ['ngRoute']);

myApp.factory('customerFactory', function($http){
	var customers = [];
	var factory = {};

	factory.getCustomers = function(callback){
		$http.get('/customers').success(function(output){
			customers = output;
			callback(customers);
		});
	}

	factory.addCustomer = function(new_customer, callback){
		$http.post('/addCustomer', new_customer).success(function(output){
			customers = output;
			callback(customers);
		});
	}

	factory.deleteCustomer = function(customer_id, callback){
		$http.delete('/removeCustomer/' + customer_id).success(function(output){
			console.log("CLIENT model/customerFactory delete function: " + customer_id);
			customers = output;
			callback(customers);
		});
	}
	return factory;
})
