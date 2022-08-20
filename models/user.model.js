/*jshint esversion: 8 */
const mongoose = require('mongoose');
let userSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    times: {
        required:true,
        type:Number,
    },
    image: {
        required: true,
        type: String,
    }
});

let userModel = mongoose.model("users", userSchema);

module.exports = userModel;
