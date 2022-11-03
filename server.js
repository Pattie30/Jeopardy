

// Always require and configure near the top

const express = require('express');
require('dotenv').config();

const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware

app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')))

// API Routes
app.get('/api/orders', (req, res) => {

})


// Catch All to serve the production app
app.get('/*', (req, res) => {
    res.send(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})