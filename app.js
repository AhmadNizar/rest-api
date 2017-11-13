const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

const users = require('./routes/usersRouter')

app.use('/api', users)
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT || '3000')