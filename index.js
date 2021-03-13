const express = require('express');
const app = express();
require('dotenv').config();
const DB = require('./src/model/index');
const Course = require('./src/model/courseModel');
const home = require('./home');

const port = process.env.PORT;

app.use(home);

//creating a collection
// function courseDocument() {
// 	return Course.create({
// 		name: 'NodeJs Tutorial',
// 		author: 'Mosh Hammedani',
// 		isPublished: true,
// 	});
// }

//console logging the saved collection
// courseDocument().then(() =>
// 	console.log('Course saved to database successfully')).catch(err => console.error(err));

new DB('mongodb://localhost/main').connect().then((_) => {
	app.listen(port, () => {
		console.log(`app running on port ${port}...`);
		// new DB('').course.create({
		// 	name: 'Angular Tutorial-video',
		// 	author: 'Mosh',
		// 	isPublished: false,
		// });
		const courseList = new DB('').course
			.find({ author: 'Mosh Hammedani' })
			.limit(10)
			.sort({ name: 1 })
			.then((result) => console.log(result));
		return courseList;
	});
});
