const express 		 = require('express')
const router  		 = express.Router()
const userController = require('../controller/usersController')
const checkAuth  = require('../helper/checkAuth') 

router.get('/users', checkAuth.checkLogin, checkAuth.checkAdmin, userController.findAllUser)

router.get('/users/:id', checkAuth.checkLogin, checkAuth.checkAdmin, userController.findUserById)

router.post('/users', checkAuth.checkLogin, checkAuth.checkAdmin, userController.createUser)

router.delete('/users/:id', checkAuth.checkLogin, checkAuth.checkAdmin, userController.deleteUser)

router.put('/users/:id', checkAuth.checkLogin, checkAuth.checkAdmin, userController.updateUser)

router.post('/signup', userController.signupUser)

router.post('/signin', userController.signinUser)

module.exports = router