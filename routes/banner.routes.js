module.exports = (app) => {
    const banners = require('../controllers/banner.controller.js');

    // Create a new info
    app.post('/banners', banners.create);

    // Retrieve all banners
    app.get('/banners', banners.findAll);

    // Retrieve a single info with infoId
    app.get('/banners/:bannerId', banners.findOne);

    // Update a banner with bannerId
    app.put('/banners/:bannerId', banners.update);

    // Delete a banner with bannerId
    app.delete('/banners/:bannerId', banners.delete);
}