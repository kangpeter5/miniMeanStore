var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	name: {type: String, required:true},
	product: {type: String, required:true},
	qty: {type: Number},
	created_at:{type:Date, default: Date.now}
})

mongoose.model('Order', OrderSchema);