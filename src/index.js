const express = require('express')
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

// GET
app.get('', (req, res) =>{
    // read html from src
    var indexHtml = fs.readFileSync('src/index.html')

    // pass html to resolver as string
    res.sendFile(__dirname + "/index.html")

    // set 'x' property of event object to desired message and print
    event.x = 'Inside GET Request'
    event.print()
})

// LISTENER
app.listen(port, () => {
    console.log('Server is up on port '+ port)
})