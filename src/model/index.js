const mongoose = require('mongoose');
// const Course = require('./courseModel');

class DB {
	constructor(url) {
		this.url = url;
		this.course = require('./courseModel');
	}

	async connect() {
		return mongoose
			.connect(this.url)
			.then(() => console.log(`Connected to database successfully...`));
    }
    
    async createCourse(name, author, isPublished) {
	try {
		const course = await new DB('').course.create({
			name,
			author,
			isPublished,
		});
		return course;
	} catch (error) {
		console.log(error);
	}
}

	async updateCourse(id, property, value) {
		try {
			const result = await this.course.findByIdAndUpdate(id, {
				new: true,
			});
			if (result) {
				result[property] = value;
				const newCourse = await result.save();
				return newCourse;
			}
			return 'No match found for the ID';
		} catch (error) {
			console.log('error => ', error);
		}
	}

	async removeCourse(id) {
		try {
			const course = await this.course.findByIdAndRemove(id);
			if (!course) return 'No match found for the ID';
			return course;
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = DB;
