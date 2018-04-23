const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	name: String,
	last_name: String,
	address: String,
	city: String,
	state: String,
	country: String,
	phone: String,
	area_code: String,
	birthdate: Date
}, {
	timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
