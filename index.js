const express = require('express');
const app = express();
require('dotenv').config();
const DB = require('./src/model/db');
const home = require('./home');

app.use(home);

new DB('mongodb://localhost/main').connect();

//Note: comment out any method for testing

//Creating a course
// const newCourse = new DB('')
// 	.createCourse('', '', true)
// 	.then((result) => console.log(`result =>`, result));
// return newCourse;

//Reading from database
// const getCourse = new DB('')
// 	.getCourse() 
// 	.then((result) => console.log(result))
// return getCourse


//Updating a course
// const updatedCourse = new DB('')
// 	.updateCourse('604cecb9461833115a3889f6', 'author', 'Danny')
// 	.then((result) => console.log(result));
// return updatedCourse;

//Deleting a course
// const deleteCourse = new DB('')
// 	.removeCourse('604d42375f9e5e73b699613b')
// 	.then(() => console.log('Course deleted successfuly'));
// return deleteCourse;
