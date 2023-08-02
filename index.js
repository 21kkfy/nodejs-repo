// index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/items');

const app = express();


// Enable CORS
app.use(cors());

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Mount the item routes
app.use('/api', itemRoutes); // Use '/api' as a base path for itemRoutes

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
