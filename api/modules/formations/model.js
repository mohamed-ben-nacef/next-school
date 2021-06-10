const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Formation = new Schema({
  title: String,
  picture_url: String,
  category: String,
  description: String,
  level: String
})

module.exports = mongoose.model('Formation', Formation)
