// Import the dependencies
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Create port and middleware
const port = 8888

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
const audienceRoute = require('./routes/audience')
app.use('/audience', audienceRoute)

// Testing app
app.listen(port, () => {
    console.log(`Port ${port} is listening.`)
})