const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/movies', require('./routes/movies'))

app.use((req, res, next) => {
    next({status:404, message: 'Not found'})
})

app.use((err, req, res, next) => {
    status = err. status || 500
    res.status(status).send(err.message)
})

const listener = () => console.log(`getting lit on port ${port}`)
app.listen(port, listener)