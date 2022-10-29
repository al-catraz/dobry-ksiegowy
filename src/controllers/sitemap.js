/*global module*/

module.exports.execute = function(app) {
    app.get('sitemap', '/mapa-strony', function(request, response) {
        response.render('sitemap');
    });
}