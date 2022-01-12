const Cluster = require('../models/cluster.model.js');

// Create and Save a new cluster
exports.create = (req, res) => {

    // Create a cluster
    const cluster = new Cluster({
        nama: req.body.nama,
        tahapan:req.body.tahapan,
        lokasi:req.body.lokasi,
        jumlah:req.body.jumlah,
    });

    // Save Cluster in the database
    cluster.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the cluster."
        });
    });
};

// Retrieve and return all clusters from the database.
exports.findAll = (req, res) => {
    Cluster.find()
    .then(clusters => {
        res.send(clusters);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving clusters."
        });
    });
};

// Find a single cluster with a clusterId
exports.findOne = (req, res) => {
    Cluster.findById(req.params.clusterId)
    .then(cluster => {
        if(!cluster) {
            return res.status(404).send({
                message: "cluster not found with id " + req.params.clusterId
            });            
        }
        res.send(cluster);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "cluster not found with id " + req.params.clusterId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving cluster with id " + req.params.clusterId
        });
    });
};

// Update a cluster identified by the clusterId in the request
exports.update = (req, res) => {

    // Find cluster and update it with the request body
    Cluster.findByIdAndUpdate(req.params.clusterId, req.body
    , {new: true})
    .then(cluster => {
        if(!cluster) {
            return res.status(404).send({
                message: "cluster not found with id " + req.params.clusterId
            });
        }
        res.send(cluster);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "cluster not found with id " + req.params.clusterId
            });                
        }
        return res.status(500).send({
            message: "Error updating cluster with id " + req.params.clusterId
        });
    });
};

// Delete a cluster with the specified clusterId in the request
exports.delete = (req, res) => {
    Cluster.findByIdAndRemove(req.params.clusterId)
    .then(cluster => {
        if(!cluster) {
            return res.status(404).send({
                message: "cluster not found with id " + req.params.clusterId
            });
        }
        res.send({message: "cluster deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "cluster not found with id " + req.params.clusterId
            });                
        }
        return res.status(500).send({
            message: "Could not delete cluster with id " + req.params.clusterId
        });
    });
};