const bcrypt 	 = require('bcrypt');
const saltRounds = 10;
const jwt 	     = require('jsonwebtoken');
require('dotenv').config()

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
	if(req.headers.UserId == req.params.id){
		res.send('Permission Denied...')
	}else{
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
}

const updateUser = (req, res) => {
	bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
      	User.update({
			name : req.body.name,
			age : req.body.age,
			email : req.body.email,
			isAdmin : req.body.isAdmin,
			password : hash
	   	},{
	   		where: {
	   			id: req.params.id}})
      	.then((user, update) => {
			res.send(update)
		}).catch(err => {
			res.send(err)
		})
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
		console.log(create);
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
			bcrypt.compare(req.body.password, user.password).then(function(result) {
   				if(result){
   					jwt.sign({UserId : user.id, name : user.name, email : user.email, isAdmin : user.isAdmin, isLogin : true}, process.env.Salt_word, (err, token)=> {
   						req.headers.token = token
   						res.send(token)
   					})
				}else{
					res.send('Email or Password is invalid')
				}
			}).catch(err => {
				res.send(err)
			})
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
	signupUser,
	signinUser
}