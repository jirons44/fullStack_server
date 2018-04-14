const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');
// order here is important....schema first


// 2 - called after saving or retrieving user below
passport.serializeUser( (user, done) => {
    done(null, user.id); // mongo user id, not googleId..adds flexibility for diff strategies.
});

passport.deserializeUser( (id, done) => {
    User.findById(id).then( user => {
        done(null, user);
    });
});


// 1 -
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret,
            callbackURL: '/auth/google/callback'
        },
        async (accessToken, refreshToken, profile, done) => {
            // executes after callback app.get /auth/google/callback returns
            // console.log('accessToken: ', accessToken);
            // console.log('refreshToken: ', refreshToken);
            // console.log('profile: ', profile);
            // now save user to database

            const existingUser = await User.findOne({ googleId: profile.id});

            if (existingUser) {
                return done(null, existingUser);
            }

            const newUser = {googleId: profile.id, displayName: profile.displayName };
            const user = await new User(newUser).save();
            done(null, user);

        }
    )
);
