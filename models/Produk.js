const mongoose = require('mongoose');

const produkSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Nama produk harus diisi'],
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: [true, 'Kuantitas produk harus diisi'],
            default: 0,
        },
    },
    {
        timestamps: true,
    }
    
);

const Produk = mongoose.model('Produk', produkSchema);

module.exports = Produk;