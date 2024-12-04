const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenue sur notre API REST simple!');
});

router.post('/products', (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ error: 'Name and price are required' });
    }

    const newProduct = {
        id: Date.now(), 
        name,
        price
    };

    res.status(201).json(newProduct);
});

module.exports = router;
