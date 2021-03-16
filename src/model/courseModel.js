const mongoose = require('mongoose');

const courses = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	author: {
		type: String
	},
	isPublished: {
		type: Boolean
	},
	category: {
		type: String,
		required: true,
		enum: ['web', 'mobile', 'desktop'],
	},
	tags: {
		type: Array,
		validate: {
			validator: function (v) {
				return v & v.length > 0;
			},
			message: 'A course should have at least one tag',
		},
	},
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', courses);
