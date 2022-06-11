// Import the dependencies
const express = require('express');

// Create router
const router = express.Router()

// Get
router.get('/getAudience', (req, res) => {
    // res.send('This is a response from the server.')
    res.json({
        "Title": "Audience",
        "Description": "This is a response from the server"
    })
})

// Post
router.post('/postAudience', (req, res) => {
    res.send('This is a response from the server. Thank you!')
})

//Request - Get
router.get('/audQuery', (req, res) => {
    res.send(req.query)
        // console.log(req.query)
})

//Request - Post
router.post('/bodyQuery', (req, res) => {
    // console.log(req.body)
    console.log(req.headers)
})

// Destructure
router.get('/userForm', (req, res) => {
    const { name, age, address } = req.query

    if (Number(age) >= 18) {
        res.status(200).send("You're 18 years old above.")
    } else {
        res.status(500).send("You're not 18 years old.")
    }
})


// Export the route
module.exports = router