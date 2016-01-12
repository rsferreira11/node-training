// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Pet = require('../models/pet');

// Routes
Pet.methods(['get', 'put', 'post', 'delete']);
Pet.register(router, '/pets');

// Return router
module.exports = router;
