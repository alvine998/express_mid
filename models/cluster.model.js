const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const ClusterSchema = mongoose.Schema({
    nama: String,
    tahapan: String,
    lokasi: String,
    jumlah: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Cluster', ClusterSchema);