const express = require('express')
const path = require('path')
const fs = require('fs');
const app = express()
const port = process.env.PORT || 3000

// Object containing a print helper function
// Displays syntax for defining properties of an object, including functions.
const event = {
    x : '',
    print() { 
        console.log(this.x)
    }
}

// Makes contents of /public available in browser
app.use(express.static(path.join(__dirname, "../public")))

// GET
app.get('', (req, res) => {
    // pass html to resolver as string
    res.sendFile(path.join(__dirname, '../public', "index.html"))

    event.x = 'Inside GET Request'
    event.print()
})

// LISTENER
app.listen(port, () => console.log('Server is up on port '+ port))