const express = require('express');
const app = express();
const product = require('./products.json')

const PORT = 3000;

app.get('/product', (req, res) => {
    res.send(product);
})

app.post('/product', (req, res) => {
    res.send('msg: "Berhasil menambahkan Produk"');
})

app.put('/product', (req, res) => {
    res.send('msg: "Berhasil mengubah Produk"');
})

app.delete('/product', (req, res) => {
    res.send('msg: "Berhasil menghapus Produk"');
})

app.listen(PORT, ()=> {
 console.log('Server is running on port:', PORT);
})