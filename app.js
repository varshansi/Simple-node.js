const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/products', (req, res) => {
    const products = [
      { id: 1, name: 'Produit 1', price: 100 },
      { id: 2, name: 'Produit 2', price: 150 },
      { id: 3, name: 'Produit 3', price: 200 }
    ];
  
    res.json(products);
  });
  
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
