const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cour = new Schema({
  title: String,
  picture_url: String,
  description: String
})

module.exports = mongoose.model('Cour', Cour)
