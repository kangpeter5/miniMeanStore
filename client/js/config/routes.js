myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: './../static/partials/dashboard.html',
			controller: "dashboardController"
		})
		.when('/customers', {
			templateUrl: './../static/partials/customers.html',
			controller: "customersController"
		})
		.when('/orders', {
			templateUrl: './../static/partials/orders.html',
			controller: "ordersController"
		})
		.when('/products', {
			templateUrl: './../static/partials/products.html',
			controller: "productsController"
		})
		.otherwise({
			redirectTo: "/"
		});
})