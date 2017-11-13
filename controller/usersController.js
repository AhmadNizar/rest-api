const User = require('../models').User

const findAllUser = (req, res) => {
	User.findAll()
	.then(users => {
		res.send(users)
	}).catch(err => {
		res.send(err)
	})
}

const findUserById = (req, res) => {
	User.findById(req.params.id)
	.then(user => {
		res.send(user)
	}).catch(err => {
		res.send(err)
	})
}

const createUser = (req, res) => {
	User.create({
		name : req.body.name,
		age : req.body.age,
		email : req.body.email,
		isAdmin : req.body.isAdmin
	}).then((user, create) => {
		res.send(user)
	}).catch(err => {
		res.send(err)
	})
}

const deleteUser = (req, res) => {
	User.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(() => {
		res.send('user already gone')
	})
	.catch(err => {
		res.send(err)
	})
}

const updateUser = (req, res) => {
	User.update({
		name : req.body.name,
		age : req.body.age,
		email : req.body.email,
		isAdmin : req.body.isAdmin
	},{where: {id: req.params.id}}).then((user, update) => {
		res.send(update)
	}).catch(err => {
		res.send(err)
	})
}

const signupUser = (req, res) => {
	User.create({
		name : req.body.name,
		age : req.body.age,
		email : req.body.email,
		isAdmin : 'false',
		password : req.body.password
	})
	.then((user, create) => {
		res.send(user)
	})
	.catch(err => {
		res.send(err)
	})
}

const signinUser = (req, res) => {
	User.findOne({
		where: {
			email : req.body.email
		}
	}).then(user => {
		if(user){
			if(user.password === req.body.password){
				res.send('Yeay Login')
			}else{
				res.send('Email or Password is invalid')
			}
		}else{
			res.send('Email or Password is invalid')
		}
	})
	.catch(err => {
		res.send(err)
	})
} 

module.exports = {
	findAllUser,
	findUserById,
	createUser,
	deleteUser,
	updateUser,
	signupUser
}