const jwt = require('jsonwebtoken')
require('dotenv').config()

function checkLogin(req, res, next){
	jwt.verify(req.headers.token, process.env.Salt_word, function(err, decoded) {
  		if(decoded.isLogin){
  			req.headers.isAdmin = decoded.isAdmin
  			req.headers.UserId = decoded.UserId
  			next()
  		}else{
  			res.send('Something wrong with login')
  		}
	});
}

function checkAdmin(req, res, next){
  	if(req.headers.isAdmin){
  		next()
  	}else
  		if(req.headers.UserId === parseInt(req.params.id)){
  			next()
  		}else{
  			res.send('Permission denied...')
  		}	
}

module.exports = {
	checkLogin,
	checkAdmin
}