const Banner = require('../models/banner.model.js');

// Create and Save a new banner
exports.create = (req, res) => {

    // Create a banner
    const banner = new Banner({
        image: req.body.image,
        nama: req.body.nama,
    });

    // Save Banner in the database
    banner.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the banner."
        });
    });
};

// Retrieve and return all banners from the database.
exports.findAll = (req, res) => {
    Banner.find()
    .then(banners => {
        res.send(banners);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving banners."
        });
    });
};

// Find a single banner with a bannerId
exports.findOne = (req, res) => {
    Banner.findById(req.params.bannerId)
    .then(banner => {
        if(!banner) {
            return res.status(404).send({
                message: "banner not found with id " + req.params.bannerId
            });            
        }
        res.send(banner);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "banner not found with id " + req.params.bannerId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving banner with id " + req.params.bannerId
        });
    });
};

// Update a banner identified by the bannerId in the request
exports.update = (req, res) => {

    // Find banner and update it with the request body
    Banner.findByIdAndUpdate(req.params.bannerId, req.body
    , {new: true})
    .then(banner => {
        if(!banner) {
            return res.status(404).send({
                message: "banner not found with id " + req.params.bannerId
            });
        }
        res.send(banner);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "banner not found with id " + req.params.bannerId
            });                
        }
        return res.status(500).send({
            message: "Error updating banner with id " + req.params.bannerId
        });
    });
};

// Delete a banner with the specified bannerId in the request
exports.delete = (req, res) => {
    Banner.findByIdAndRemove(req.params.bannerId)
    .then(banner => {
        if(!banner) {
            return res.status(404).send({
                message: "banner not found with id " + req.params.bannerId
            });
        }
        res.send({message: "banner deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "banner not found with id " + req.params.bannerId
            });                
        }
        return res.status(500).send({
            message: "Could not delete banner with id " + req.params.bannerId
        });
    });
};