var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
	return{
		show: function(req,res){
			Customer.find({}, function(err,results){
				if (err) {
					console.log(err);
				}else{
					res.json(results);
				}
			})
		},
		add: function(req,res){
			console.log('adding customer', req.body.name, req.body.created_at);
			var new_customer = new Customer({name: req.body.name, created_at: req.body.created_at});
			new_customer.save(function(err){
				if (err) {
					console.log('__failed at adding user to db!__');
				}else{
					console.log('successfully added to db!');
					module.exports.show(req,res);
				}
			})
		},
		remove: function(req,res){
			console.log('removing customer...', req.params.id);
			Customer.remove({_id:req.params.id}, function(err){
				if (err) {
					console.log("__ failed to delete user in db!__");
				}else{
					console.log('successfully deleted user in db');
					module.exports.show(req,res);
				}
			})
		}
	}
})();