const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            // executes after callback app.get /auth/google/callback returns
            console.log('accessToken: ', accessToken);
            console.log('refreshToken: ', refreshToken);
            console.log('profile: ', profile);
            // now save user to database
        }
    )
);
