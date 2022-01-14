const express = require('express');
const router = express.Router();

// => GET
router.get('/', (req, res, next) => {
    res.send("\
    <h1> | Express | <h1/>\
    <form method='get' action='/subscribe'>\
        <button type='submit'>Subscribe Here</button>\
    </form>\
    ");
});

// Exports route
module.exports = router;