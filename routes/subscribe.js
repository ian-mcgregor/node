// Modules
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const rootDir = require('../utils/path.js')

// MIDDLEWARE
router.use(bodyParser.urlencoded({ extended: true }));

// => GET
router.get('/subscribe', (req, res, next) => {
    // pass html to resolver as string
    res.sendFile(path.join(rootDir, 'public', "subscribe.html"));
});

// => POST
router.post('/subscribe', (req, res, next) => {
    // Destructuring body object
    let {email, name} = req.body
    console.log("Your email is " + email + "\nYour name is " + name)
    if(name && email){
        return res.status(200).redirect('/');
    } else {
        return res.sendStatus(400);
    }
});

// Export routes
module.exports = router;