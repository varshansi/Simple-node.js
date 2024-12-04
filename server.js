const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const productRoutes = require('./index');

app.use('/api', productRoutes);

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
