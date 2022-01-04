const mongoose = require('mongoose');

const KarirSchema = mongoose.Schema({
    nama: String,
    detail: String,
    syarat: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Karir', KarirSchema);