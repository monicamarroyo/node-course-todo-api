var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MongoDB_URI ||'mongodb://localhost:27017/TodoApp');
// if exists else were going to use the localhost URL making sure it connects to a URl

module.exports = {
    mongoose
};