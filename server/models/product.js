var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
	name: {type: String, required:true},
	img: {type:String},
	desc: {type: String},
	qty: {type: Number}
})

mongoose.model('Product', ProductSchema);