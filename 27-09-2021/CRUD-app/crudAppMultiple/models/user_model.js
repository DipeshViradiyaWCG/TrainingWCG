const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    first_name : String,
    last_name : String,
    email : String,
    password : String
});

module.exports = mongoose.model("user", userSchema);