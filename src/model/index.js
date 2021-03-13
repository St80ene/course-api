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
        .then(() => console.log(`Connected to database successfully...`))
    }
}

module.exports = DB

