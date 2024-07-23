/*global module*/

module.exports = function(app) {
    var config = {
        port:           process.env.PORT || 10000,
        publicDir:      __dirname + '/public',
        controllersDir: __dirname + '/src/controllers',
        viewsDir:       __dirname + '/src/views',
        viewEngine:     'twig',
        lessConfig: {
            source:     __dirname + '/src/less',
            preprocess: {
                path: function(path) {
                    return path.replace('/css/', '/');
                }
            }
        },
        bodyParserConfig: {
            extended: false
        },
        sendgridConfig: {
            key:        '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',
            sender:     'biuro.dobryksiegowy@gmail.com',
            recipient:  'biuro.dobryksiegowy@gmail.com',
            subject:    'Zapytanie od klienta ze strony www'
        },
        assetsVersion:  101,
        pageTitle:      'Dobry Księgowy Marcin Bąbolewski sp. z o.o. - księgowość, rachunkowość - Mińsk Mazowiecki',
        pageKeywords:   'biuro rachunkowe, księgowość, biuro księgowe, księgowy, działalność gospodarcza, podatki, podatek, vat, optymalizacja podatkowa, zus, kadry, płace, rozliczenia roczne, zwrot vat, mińsk mazowiecki, mińsk, dobry księgowy',
        pageDescription:'Nasze biuro rachunkowe w Mińsku Mazowieckim oferuje kompleksową obsługę księgową i kadrowo-płacową firm. Pomagamy również przy zakładaniu działalności gospodarczej.',
        pageSiteName:   'Dobry Księgowy',
        pageLocale:     'pl_PL',
        pageType:       'website'
    }

    config.lessConfig.dest = config.publicDir;

    app.locals.config = config;

    return config;

}
