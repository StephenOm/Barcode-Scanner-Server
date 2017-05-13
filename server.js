var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose'),
    Task = require('./api/models/upcModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV == 'production'){
  mongoose.connect(process.env.MONGO_URL);
} else {
  mongoose.connect('mongodb://localhost/upc');
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/upcRoutes');
routes(app);

app.listen(port);

console.log('Listening on ' + port);
