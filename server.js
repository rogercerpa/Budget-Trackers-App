const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const compression = require('compression');

const PORT = 3000;

const app = express();

app.use(logger('dev'));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(
	process.env.MONGODB_URI ||
		'mongodb://rcerpa:rc032090@ds263248.mlab.com:63248/heroku_5zmsscpq',
	{
		// useNewUrlParser  : true,
		// useFindAndModify : false,
		useMongoClient : true
	}
);

// routes
app.use(require('./routes/api.js'));
app.use(require('./routes/htmlRoutes.js'));

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
