var customers = require('./../controllers/customers.js')
var orders = require('./../controllers/orders.js')
var products = require('./../controllers/products.js')
// var dashboards = require('./../controllers/dashboards.js')

module.exports = function(app){
	//customers
	app.get('/customers', function(req,res){
		customers.show(req,res);
	});
	app.get('/recent_customers', function(req,res){
		products.show_recent(req,res);
	});
	app.post('/addCustomer', function(req,res){
		customers.add(req,res);
	});
	app.delete('/removeCustomer/:id', function(req,res){
		console.log(req.params.id);

		customers.remove(req,res);
	});

	//orders
	app.get('/orders', function(req,res){
		orders.show(req,res);
	});
	app.get('recent_orders', function(req,res){
		orders.show_recent(req,res);
	});
	app.post('/addOrder', function(req,res){
		orders.add(req,res);
	});

	//products
	app.get('/products', function(req,res){
		products.show(req,res);
	});
	app.get('/recent_products', function(req,res){
		products.show_recent(req,res);
	});
	app.post('/addProduct', function(req,res){
		products.add(req,res);
	});

	// //dashboards
	// app.get('/dashboard', function(req,res){
	// 	dashboard.show(req,res);
	// });
}