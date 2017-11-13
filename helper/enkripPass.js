const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Store hash in your password DB.
});