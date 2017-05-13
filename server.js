var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose'),
    Task = require('./api/models/upcModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/upc')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/upcRoutes');
routes(app);

app.listen(port);

console.log('Server started on port ' + port);