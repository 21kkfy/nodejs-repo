// routes/items.js

const express = require('express');
const router = express.Router();

// In-memory data store
let items = [];

// GET all items
router.get('/items', (req, res) => {
    try {
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// POST a new item
router.post('/items', (req, res) => {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newItem = {
        id: items.length + 1, // This is just a simple way to generate IDs
        name,
        description,
        price,
    };

    items.push(newItem);
    res.status(201).json(newItem);
});

// ... Add other endpoints for updating and deleting items (if needed)

module.exports = router;
