var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var port = 3000;

app.use("api/v1", restRouter);
app.listen(port, function () {
    console.log('APP is listening to ' + port + 'we are good to go!');
});