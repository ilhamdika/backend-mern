const express = require('express');
const mongoose = require('mongoose');
const Produk = require('./models/Produk');
const apiRouter = require('./routes/api');
const app = express();

app.use(express.json());
//routes
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send('Hello World Api');
});


mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://ilham27dika:testkerja123@dikaapi.vjvl9ky.mongodb.net/db_testKerja?retryWrites=true&w=majority').then(()=>{
    app.listen(3000, () => {
        console.log('server started on port 3000');
    });
    console.log('connected to database');
}).catch((err)=>{
    console.log(err);
});