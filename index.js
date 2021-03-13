const express = require('express');
const app = express();
require('dotenv').config();
const DB = require('./src/model/index');
const home = require('./home');

app.use(home);

new DB('mongodb://localhost/main').connect();

//Creating a course
const newCourse = new DB('')
	.createCourse('C# Tutorial', 'Kingsley', true)
	.then((result) => console.log(result, '\n Course saved successfully'));
return newCourse;


//Updating a course
const updatedCourse = new DB('')
	.updateCourse('604cecb9461833115a3889f6', 'author', 'Danny')
	.then((result) => console.log(result));
return updatedCourse;

//Deleting a course
const deleteCourse = new DB('').removeCourse('604cdb3074066f7669a49d99');
return deleteCourse;
