module.exports = (app) => {
    const promos = require('../controllers/promo.controller.js');

    // Create a new promo
    app.post('/promos', promos.create);

    // Retrieve all promos
    app.get('/promos', promos.findAll);

    // Retrieve a single promo with promoId
    app.get('/promos/:promoId', promos.findOne);

    // Update a promo with promoId
    app.put('/promos/:promoId', promos.update);

    // Delete a promo with promoId
    app.delete('/promos/:promoId', promos.delete);
}