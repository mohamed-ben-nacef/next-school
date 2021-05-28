const express = require('express')

// Create express instnace
const app = express()

// Init body-parser options (inbuilt with express)
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/', function(req, res){
    res.send('hello')
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}