const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const userRoutes = require('./routes/users');

mongoose.connect('mongodb://localhost/rest-api-example', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log('DB is connected'))
  .catch(err => console.log(err));

//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());


//routes
app.use('/users', userRoutes);

//static files (si tuviera el front)

//error handlers

//start the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});