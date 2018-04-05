var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send({hi: 'hi there, updated for re-deploy to heroku'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
