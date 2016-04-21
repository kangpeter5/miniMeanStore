var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = (function(){
	return{
		show: function(req,res){
			Order.find({}, function(err, results){
				if (err) {
					console.log(err);
					res.json(err);
				}else{
					res.json(results);
				}
			});
		},

		show_recent: function(req,res){
			var q = Order.find({}).sort({created_at: -1}).limit(3);
			q.exec(function(err,results){
				if (err) {
					console.log(err);
					res.json(err);
				}else{
					res.json(err);
				}
			});
		},

		add: function(req,res){
			console.log('adding order...', req.body.name, req.body.product, req.body.qty);
			
			var new_order = new Order({name: req.body.name, product: req.body.product, qty: req.body.qty, created_at: req.body.created_at});

			new_order.save(function(err){
				if (err) {
					console.log('__failed to add order to db!__');
					res.json(err);
				}else{
					console.log('successfully added Order to db');
					
					Product.findOne({_id: req.body.product_id}, function(err, product){

						// var new_qty = product.qty - req.body.qty;

						console.log(req.body);
						Product.update({name: req.body.product}, {$inc: {qty: -req.body.qty}}, function(err){
							if (err) {
								console.log('__failed to update qty of product__');
							}else{
								console.log("successfully udpated product qty");
							}
						});
					});

					module.exports.show(req,res);
				}
			});
		}
	}
})()