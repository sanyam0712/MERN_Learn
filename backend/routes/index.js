const express = require('express');
const authController = require('../controller/authController');
const router = express.Router();

//testing
router.get('/test', (req, res) => res.json({msg: 'Working!'}))
router.post('/register', authController.register);
router.post('/login', authController.login);

//user , login , register, logout , refresh
// blogs , crud , create , read all, update , delete , particular blog by id
//comments , create , crud,   
module.exports = router;