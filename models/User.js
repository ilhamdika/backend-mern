const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Nama produk harus diisi'],
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type : String,
            required: true
        },
        jenis_kelamin: {
            type : String,
            required: true
        },
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;
