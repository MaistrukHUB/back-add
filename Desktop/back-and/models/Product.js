import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({

	about: {
		type: String,

	},
	category: {
		type: String,

	},
	cost: {
		type: [Number],

	},
	extent: {
		type: [Number],

	},
	id: {
		type: String,
		unique: true
	},
	img: {
		type: [String],

	},
	name: {
		type: String,

	},
	rating: {
		type: String,

	},
	type: {
		type: String,

	},


})

export default mongoose.model('Product', ProductSchema, "Product")