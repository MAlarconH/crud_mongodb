const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contacSchema = new Schema ({
    nombre: String,
    edad: Number,
    phone_number: String
    
}, {versionKey:false})

module.exports = mongoose.model('contacts', contacSchema)