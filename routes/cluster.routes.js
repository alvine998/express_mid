module.exports = (app) => {
    const clusters = require('../controllers/cluster.controller.js');

    // Create a new info
    app.post('/clusters', clusters.create);

    // Retrieve all clusters
    app.get('/clusters', clusters.findAll);

    // Retrieve a single info with infoId
    app.get('/clusters/:clusterId', clusters.findOne);

    // Update a cluster with clusterId
    app.put('/clusters/:clusterId', clusters.update);

    // Delete a cluster with clusterId
    app.delete('/clusters/:clusterId', clusters.delete);
}