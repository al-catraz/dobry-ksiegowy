/*global module*/

module.exports.execute = function(app) {
    app.get('about', '/o-firmie', function(request, response) {
        response.render('about', {
            page: 'about'
        });
    });

    app.get('about_seo', '/biuro-ksiegowe-minsk-mazowiecki', function(request, response) {
        response.render('about', {
            page: 'about'
        });
    });
}