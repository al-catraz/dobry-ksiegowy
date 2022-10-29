/*global module*/

module.exports.execute = function(app) {
    app.get('contact', '/kontakt', function(request, response) {
        response.render('contact', {
            page: 'contact'
        });
    });

    app.get('contact_seo', '/ksiegowosc-minsk-mazowiecki', function(request, response) {
        response.render('contact', {
            page: 'contact'
        });
    });

    app.post('contact-send', '/wyslij-wiadomosc', function(request, response) {
        var sendgrid = require('sendgrid')(app.locals.config.sendgridConfig.key),
            sendgridRequest = sendgrid.emptyRequest({
                method: 'POST',
                path: '/v3/mail/send',
                body: {
                    personalizations: [{
                        to: [{
                            email: app.locals.config.sendgridConfig.recipient
                        }],
                        subject: app.locals.config.sendgridConfig.subject
                    }],
                    from: {
                        email: app.locals.config.sendgridConfig.sender
                    },
                    content: [{
                        type: 'text/html',
                        value: '<b>Nadawca:</b> ' + request.body.name + '<br /><b>Kontakt:</b> ' + request.body.contact + '<br /><b>Wiadomość:</b> ' + request.body.message
                    }]
                }
            });

        if (request.body.name !== '' && request.body.contact !== '' && request.body.message !== '') {
            sendgrid.API(sendgridRequest, function(error, res) {
                if (error) {
                    console.log('Error response received');
                }

                response.render('contact', {
                    messageSent: true
                });
            });
        }
    });
}
