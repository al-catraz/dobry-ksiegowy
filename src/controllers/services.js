/*global module*/

module.exports.execute = function(app) {
    app.get('services', '/uslugi-ksiegowe', function(request, response) {
        response.render('services', {
            page: 'services'
        });
    });

    app.get('services_seo', '/biuro-rachunkowe-minsk-mazowiecki', function(request, response) {
        response.render('services', {
            page: 'services'
        });
    });
}