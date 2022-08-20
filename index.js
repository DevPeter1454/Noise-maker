/*jshint esversion: 8 */
require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
app.set('view engine', 'ejs');
const userRoute = require('./routes/user.route');
app.use('/', userRoute);
app.use(express.urlencoded({extended: true}));
const PORT = process.env.PORT;
const URI = process.env.MONGO_DB_URI;
mongoose.connect(URI, (err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log('Mongoose connected');
    }
});



app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}` );
});






