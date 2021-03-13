const mongoose = require('mongoose');


const courses = new mongoose.Schema({
	name: { type: String },
	author: { type: String },
	isPublished: { type: Boolean },
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', courses);
