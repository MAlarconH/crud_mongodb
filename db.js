const mongoose = require('mongoose')
const url = 'mongodb://localhost/db_contacts'

mongoose.connect(url);

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'))
db.once('open', function callback() {
    console.log("Conectado correctamente a MongoDB")
})

module.exports = db