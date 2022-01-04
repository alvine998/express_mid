module.exports = (app) => {
    const karirs = require('../controllers/karir.controller.js');

    // Create a new karir
    app.post('/karirs', karirs.create);

    // Retrieve all karirs
    app.get('/karirs', karirs.findAll);

    // Retrieve a single karir with karirId
    app.get('/karirs/:karirId', karirs.findOne);

    // Update a karir with karirId
    app.put('/karirs/:karirId', karirs.update);

    // Delete a karir with karirId
    app.delete('/karirs/:karirId', karirs.delete);
}