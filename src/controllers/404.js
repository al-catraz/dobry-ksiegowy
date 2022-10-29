/*global module*/

module.exports.execute = function(app) {
    app.get('/404', function(request, response) {
        response.render('404');
    });
}