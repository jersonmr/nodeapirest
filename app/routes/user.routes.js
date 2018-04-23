module.exports = (app) => {
	const users = require('../controllers/user.controller');

	// Registrando un nuevo usuario
	app.post('/users', users.create);

	// Listando todos los usuarios
	app.get('/users', users.findAll);

	// Listando un usuario por su id
	app.get('/users/:userId', users.findOne);

	// Actualizando un usuario por su id
	app.put('/users/:userId', users.update);

	// Eliminando un usuario por su id
	app.delete('/users/:userId', users.delete);
};
