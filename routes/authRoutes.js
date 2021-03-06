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

    // req.logout is a function added by passport, takes cookie and
    // kills the cookie
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    // made up to test who is the currently logged in
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);  // immediate send
    });

};
