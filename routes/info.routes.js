module.exports = (app) => {
    const infos = require('../controllers/info.controller.js');

    // Create a new info
    app.post('/infos', infos.create);

    // Retrieve all infos
    app.get('/infos', infos.findAll);

    // Retrieve a single info with infoId
    app.get('/infos/:infoId', infos.findOne);

    // Update a info with infoId
    app.put('/infos/:infoId', infos.update);

    // Delete a info with infoId
    app.delete('/infos/:infoId', infos.delete);
}