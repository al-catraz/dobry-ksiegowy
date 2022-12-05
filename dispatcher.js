/*global module*/

module.exports.dispatch = function(app, fs) {
    app.use(function(request, response, next) {
        if (typeof(request.headers['accept-language']) !== 'undefined' && request.headers['accept-language'].indexOf('ru') !== -1) {
            response.end();
        }

        app.locals.request = request;
        app.locals.response = response;
        app.locals.config.pageUrl = request.protocol + '://' + request.get('host') + request.originalUrl;
        app.locals.config.pageImage = request.protocol + '://' + request.get('host') + '/img/parallax-home.jpg';

        return next();
    });

    fs.readdirSync(app.locals.config.controllersDir).forEach(function(file) {
        if (file.substr(-3) === '.js') {
            var controller = require(app.locals.config.controllersDir + '/' + file);

            controller.execute(app);
        }
    });

    app.use(function(reqest, response) {
        response.redirect('/404');
    });
}
