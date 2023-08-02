const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import Mongoose
const cors = require('cors'); // Import CORS middleware

const app = express();
const port = 3000;

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Connect to your MongoDB database
const dbURI = 'mongodb://localhost:27017/demo'; // Replace with your database connection URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Define the item schema and model
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});

const Item = mongoose.model('Item', itemSchema);

// Define the route to handle POST requests for adding items
app.post('/api/items', (req, res) => {
    const newItem = new Item(req.body);

    newItem.save()
        .then(item => {
            res.json(item);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to add the item.' });
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
