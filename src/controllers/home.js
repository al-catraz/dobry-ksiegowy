/*global module*/

module.exports.execute = function(app) {
    app.get('home', '/', function(request, response) {
        response.render('home', {
            page: 'home'
        });
    });
}