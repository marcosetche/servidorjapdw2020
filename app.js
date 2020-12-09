const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());        // el navegador me bloqueaba la petición de la aplicación web por seguridad entonces tuve que usar el paquete CORS para evitar el bloqueo

app.get('/', (req, res) => {
  res.send('Bienvenidxs a la base de datos de JaP DW');
})


app.get('/ecommerce-api/category/all.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/json/', 'all_categories.json'));
})

app.get('/ecommerce-api/product/publish.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/json/', 'publish.json'));
})

app.get('/ecommerce-api/category/1234.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/json/', '1234.json'));
})

app.get('/ecommerce-api/product/all.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/json/', 'all_product.json'));
})

app.get('/ecommerce-api/product/5678.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/json/', '5678.json'));
})

app.get('/ecommerce-api/product/5678-comments.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/json/', '5678-comments.json'));
})

app.get('/ecommerce-api/cart/654.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/json/', '654.json'));
})

app.get('/ecommerce-api/cart/buy.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/json/', 'buy.json'));
})


app.listen(port, () => {
  console.log(`Servidor de Marquitos`);
})