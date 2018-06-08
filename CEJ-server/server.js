var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var port = 3000;
var mongoose = require('mongoose');

// mongoose.connect('mongodb://CEJ_database:Yx736089!@ds151970.mlab.com:51970/cej_database');
//mongoose.connect("mongodb://cej:cej001@ds151970.mlab.com:51970/cej");
mongoose.connect('mongodb://user:user@ds037587.mlab.com:37587/coj');

app.use("/api/v1/", restRouter);


app.listen(port, function () {
    console.log('APP is listening to ' + port);
});