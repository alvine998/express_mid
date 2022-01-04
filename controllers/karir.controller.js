const Karir = require('../models/karir.model.js');

// Create and Save a new karir
exports.create = (req, res) => {

    // Create a karir
    const karir = new Karir({
        nama: req.body.nama, 
        detail: req.body.detail,
        syarat:req.body.syarat,
    });

    // Save Karir in the database
    karir.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the karir."
        });
    });
};

// Retrieve and return all karirs from the database.
exports.findAll = (req, res) => {
    Karir.find()
    .then(karirs => {
        res.send(karirs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving karirs."
        });
    });
};

// Find a single karir with a karirId
exports.findOne = (req, res) => {
    Karir.findById(req.params.karirId)
    .then(karir => {
        if(!karir) {
            return res.status(404).send({
                message: "karir not found with id " + req.params.karirId
            });            
        }
        res.send(karir);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "karir not found with id " + req.params.karirId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving karir with id " + req.params.karirId
        });
    });
};

// Update a karir identified by the karirId in the request
exports.update = (req, res) => {

    // Find karir and update it with the request body
    Karir.findByIdAndUpdate(req.params.karirId, req.body
    , {new: true})
    .then(karir => {
        if(!karir) {
            return res.status(404).send({
                message: "karir not found with id " + req.params.karirId
            });
        }
        res.send(karir);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "karir not found with id " + req.params.karirId
            });                
        }
        return res.status(500).send({
            message: "Error updating karir with id " + req.params.karirId
        });
    });
};

// Delete a karir with the specified karirId in the request
exports.delete = (req, res) => {
    Karir.findByIdAndRemove(req.params.karirId)
    .then(karir => {
        if(!karir) {
            return res.status(404).send({
                message: "karir not found with id " + req.params.karirId
            });
        }
        res.send({message: "karir deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "karir not found with id " + req.params.karirId
            });                
        }
        return res.status(500).send({
            message: "Could not delete karir with id " + req.params.karirId
        });
    });
};