const express = require('express');
const app = express();
const port = 3000;

const products = require('./products.json');

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
