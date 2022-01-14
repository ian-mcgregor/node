// Modules
const express = require('express');
// Allows you to navigate filesystem via path.join()
const bodyParser = require('body-parser');
const path = require('path')

// Initializing express engine
const app = express()
const port = process.env.PORT || 3000

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));

// Subscribe POST request handling
app.post('/subscribe', (req, res, next) => {
    // Destructuring body object
    let {email, name} = req.body
    console.log("Your email is " + email + "\nYour name is " + name)
    if(name && email){
        return res.sendStatus(200);
    }
    return res.sendStatus(400);
})

// Subscribe GET request handling
app.get('/subscribe', (req, res, next) => {
    // pass html to resolver as string
    res.sendFile(path.join(__dirname, '../public', "index.html"))
})

// Homepage
app.use('/', (req, res, next) => {
    res.send("\
    <h1> Express|sserpxE <h1/>\
    <form method='get' action='/subscribe'>\
    <button type='submit'>Subscribe Here</button>\
    </form>\
    ")
});
// app.use((req, res, next) => {
//     res.send("<h1> hello from middleware2 <h1/>")
    
// });

// LISTENER
app.listen(port, () => console.log('Server is up on port '+ port))