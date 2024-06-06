const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testApp');

const userSchema =mongoose.Schema({
    image: String, // here image is a string because we will give url as input which is basically a string
    email: String,
    name:  String
})

module.exports = mongoose.model('User', userSchema);
