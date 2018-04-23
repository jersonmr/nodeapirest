const User = require('../models/user.model');

// Crear y registrar un usuario
exports.create = (req, res) => {
	// Validando el request
	if (!req.body.name || !req.body.last_name) {
		return res.status(400).send({
			message: 'El nombre y/o apellido del usuario no puede estar vacio'
		});
	}
	// Creando el usuario
	const user = new User({
		name: req.body.name,
		last_name: req.body.last_name,
		address: req.body.address,
		city: req.body.city,
		state: req.body.state,
		country: req.body.country,
		phone: req.body.phone,
		area_code: req.body.area_code,
		birthdate: req.body.birthdate
	});
	// Registrando el usuario en la base de datos
	user.save()
		.then(data => {
			res.send(data);
		}).catch(err => {
			res.status(500).send({
				message: err.message || 'Ocurrió un error mientras se intentaba registrar el usuario'
			});
		});
};

// Listando todos los usuarios
exports.findAll = (req, res) => {
	User.find()
		.then(users => {
			res.send(users);
		}).catch(err => {
		res.status(500).send({
				message: err.message || 'Ocurrió un error al intentar listar todos los usuarios'
			});
		});
};

// Encontrar un usuario específico por su id
exports.findOne = (req, res) => {
	User.findById(req.params.userId)
		.then(user => {
			if (!user) {
				return res.status(404).send({
					message: 'Usuario no encontrado por el id ' + req.params.userId
				});
			}
			res.send(user);
		}).catch(err => {
			if (err.kind === 'ObjectId') {
				return res.status(404).send({
					message: 'Usuario no encontrado por el id ' + req.params.userId
				});
			}
			return res.status(500).send({
				message: 'Error consultando al usuario con id ' + req.params.userId
			});
		});
};

// Actualizando un usuario por su id
exports.update = (req, res) => {
	if (!req.body.name || !req.body.last_name) {
		return res.status(400).send({
			message: 'El nombre y/o apellido del usuario no puede estar vacio'
		});
	}
	// Encontrando y actualizando al usuario
	User.findByIdAndUpdate(req.params.userId, {
		name: req.body.name,
		last_name: req.body.last_name,
		address: req.body.address,
		city: req.body.city,
		state: req.body.state,
		country: req.body.country,
		phone: req.body.phone,
		area_code: req.body.area_code,
		birthdate: req.body.birthdate
	}, { new: true })
		.then(user => {
			if (!user) {
				return res.status(404).send({
					message: 'Usuario no encontrado por el id ' + req.params.userId
				});
			}
			res.send(user);
		}).catch(err => {
			if (err.kind === 'ObjectId') {
				return res.status(404).send({
					message: 'Usuario no encontrado por el id ' + req.params.userId
				});
			}
			return res.status(500).send({
				message: 'Error actualizando el usuario con id ' + req.params.userId
			});
		});
};

// Eliminando un usuario por su id
exports.delete = (req, res) => {
	User.findByIdAndRemove(req.params.userId)
		.then(user => {
			if (!user) {
				return res.status(404).send({
					message: 'Usuario no encontrado por el id ' + req.params.userId
				});
			}
			res.send({ message: 'Usuario eliminado exitosamente!'});
		}).catch(err => {
			if (err.kind === 'ObjectId' || err.name === 'NotFound') {
				return res.status(404).send({
					message: 'Usuario no encontrado por el id ' + req.params.userId
				});
			}
			return res.status(500).send({
				message: 'Error eliminando el usuario con id ' + req.params.userId
			});
		});
}
