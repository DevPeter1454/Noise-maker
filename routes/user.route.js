/*jshint esversion : 8 */
const express = require('express');
const router = express.Router();

const { getAllUsers, getAddUser, postAddUser, incrementTimes, decrementTimes, deleteUser } = require('../controllers/user.controller');
const upload = require('../controllers/storage.controller');

//get all users
router.get('/', getAllUsers);
//add a user get route
router.get('/adduser', getAddUser);
//add a user post route
router.post('/adduser',upload.single("img"), postAddUser);
//increment times post
router.post('/increment/:id', incrementTimes);
//decrement times post
router.post('/decrement/:id/:times', decrementTimes);
//delete user
router.post('/delete/:id', deleteUser );


module.exports = router;