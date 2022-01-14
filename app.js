// Modules
const express = require('express');
// Grab port from environment or use 3000
const port = process.env.PORT || 3000

const app = express();

const homeRoutes = require('./routes/home.js')
const subscribeRoutes = require('./routes/subscribe.js')

app.use(homeRoutes);
app.use(subscribeRoutes);

// Catch all
app.use((req, res, next) => {
    res.status(404).send("<h1>Page Not Found</h1>")
});
// LISTENER
app.listen(port, () => console.log('Server is up on port '+ port));