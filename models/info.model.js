const mongoose = require('mongoose');

const InfoSchema = mongoose.Schema({
    posisi: String,
    nama: String,
    nohp: String,
    email: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Info', InfoSchema);