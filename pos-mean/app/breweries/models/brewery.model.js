'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var BrewerySchema = new Schema({
	name: {
		type: String,
		unique: true,
		require: true
	},
	description: {
		type: String
	},
	dt_inc: {
		type: Date
	},
	dt_alt: {
		type: Date
	}
});

module.exports = mongoose.model('Brewery', BrewerySchema);