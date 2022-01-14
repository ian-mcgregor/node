// Modules
const path = require('path');
const express = require('express');
// Grab port from environment or use 3000
const port = process.env.PORT || 3000;
// Start app
const app = express();
// Routes
const homeRoutes = require('./routes/home.js');
const subscribeRoutes = require('./routes/subscribe.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoutes);
app.use(subscribeRoutes);

// Catch all
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', "404.html"));
});
// LISTENER
app.listen(port, () => console.log('Server is up on port '+ port));