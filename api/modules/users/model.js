const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  username: String,
  password: String,
  email: String,
  usertype: {
    type: String
  }
})

module.exports = mongoose.model('User', User)
