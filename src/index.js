const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('', (req, res) =>{
    res.send('<br></br>Hello<br><br>World')
})

app.listen(port, () => {
    console.log('Server is up on port '+ port)
})