const mongoose = require('mongoose');

const BannerSchema = mongoose.Schema({
    image: String,
    nama: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Banner', BannerSchema);