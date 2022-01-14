const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path.js');
// => GET
router.get('/', (req, res, next) => {
    // pass html to resolver as string
    res.sendFile(path.join(rootDir, 'public', "home.html"));
});

// Exports route
module.exports = router;