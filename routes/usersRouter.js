const express 		 = require('express')
const router  		 = express.Router()
const userController = require('../controller/usersController') 

router.get('/users', userController.findAllUser)

router.get('/users/:id', userController.findUserById)

router.post('/users', userController.createUser)

router.delete('/users/:id', userController.deleteUser)

router.put('/users/:id', userController.updateUser)

router.post('/signup', userController.signupUser)

router.post('/signin')

module.exports = router