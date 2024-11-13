const express = require('express');
const path = require('path');
const app = express();
const port = 3000; //NOTE: Use any port you want too. HTTPS is not supported unless using something like NGINX

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'build')));

// Route for player page (optional, can be accessed directly)
app.get('/player', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'player.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
