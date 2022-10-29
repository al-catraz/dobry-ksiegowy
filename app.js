var express = require('express'),
    app = express(),
    fs = require('fs'),
    http = require('http'),
    twig = require('twig'),
    config = require('./config.js')(app),
    dispatcher = require('./dispatcher.js'),
    compression = require('compression')(),
    lessMiddleware = require('less-middleware'),
    bodyParser = require('body-parser'),
    expressReverse = require('express-reverse')(app);

app.set('views', config.viewsDir);
app.set('view engine', config.viewEngine);
app.use(compression);
app.use(lessMiddleware(config.lessConfig.source, config.lessConfig));
app.use(express.static(config.publicDir));
app.use(bodyParser.urlencoded(config.bodyParserConfig));
app.listen(config.port);

dispatcher.dispatch(app, fs);
