'use strict';

var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  })

  User.beforeCreate(user => {
    return bcrypt.hash(user.password, saltRounds).then(function(hash) {
      user.password = hash
    });
  })

  return User;
};