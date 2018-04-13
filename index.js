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

// light weight framework express.
const app = express();

// tell express we're using cookieSession

// middlewares - pre-processing b 4 route handlers.
//  good for common...but can limit to certain route handlers, not all

/*
 1 - cookie-session
     the cookie-session extracts out of cookie and assignes to
     req.session which equals
     {
     "passport": {
     "user": "5ac92f8d3b99623bbc48ca1f"
     }
     }
    ..user value is the id of our user in mongo
    ..this is then passed to passport, which looks at req.session

*/

/*
        cookie-session vs. express-session

        diff is how that data is stored.
        cookie-session  - cookie is the session with exact info and is limited to 4kb size limit
        express-session - cookie references a session, some remote server side data store. we can store as much
                          stuff as we want
 */



app.use(
    // configuration object...max age=30 days,
    // key to encrypt cookie is an array
    // ...passing more than one and a random one will be picked for u
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 100,
        keys: [keys.cookieKey]
    })
);

// middleware requred to initialize passport, tell passport we're using cookies to handle authentication
app.use(passport.initialize());
// persistant login session, middleware also must be used
app.use(passport.session());




// returns a function, then calls it passing in app
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
