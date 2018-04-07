const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');  // needed to tell passport we're using cookie-session
const keys = require('./config/keys');


/*
 this file is not exporting anything.
 just need to execute the code. no need to assign
 e.g. const passportConfig = require('./services/passport');
 */
// important order to have user first b 4 passport,
//  if passport runs first, there is no model class.
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI + keys.mongoDBName);

const app = express();

// tell express we're using cookieSession
app.use(
    // configuration object...max age=30 days,
    // key to encrypt cookie is an array
    // ...passing more than one and a random one will be picked for u
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 100,
        keys: [keys.cookieKey]
    })
);

// tell passport we're using cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());


// returns a function, then calls it passing in app
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
