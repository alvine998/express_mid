const mongoose = require('mongoose');

const PromoSchema = mongoose.Schema({
    judul: String,
    deskripsi: String,
    image: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', PromoSchema);