const express = require('express');

/*
 this file is not exporting anything.
 just need to execute the code. no need to assign
 e.g. const passportConfig = require('./services/passport');
 */
require('./services/passport');

const app = express();

// returns a function, then calls it passing in app
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
