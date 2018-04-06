const passport = require('passport');

module.exports = app => {

    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //this one gets the code in url
    app.get(
        '/auth/google/callback',
        passport.authenticate('google')
    );

};
