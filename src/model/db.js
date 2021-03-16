const mongoose = require('mongoose');

class DB {
	constructor(url) {
		this.url = url;
		this.course = require('./courseModel');
	}

	async connect() {
		return mongoose
			.connect(this.url)
			.then(() => console.log(`Connected to MongoDB...`));
	}

	async createCourse(name, author, isPublished, category, tag) {
		try {
			const course = await new DB('').course.create({
				name,
				author,
				isPublished,
				category,tag
			});
		
			return course;
		} catch (error) {
			// console.log(error.message);
			for (const key in error.errors) {
				console.log(error.errors[key].message);
			}
		}
	}

	async getCourse() {
		try {
			const course = await new DB('').course.find()
			return {data: course}
		} catch (error) {
			console.error(error.message);
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
