const express = require('express')
const router = express.Router()

const contactController = require('../controllers/contactController')

//Mostrar contacto (GET)
router.get('/', contactController.mostrar)
//Crear contacto (POST)
router.post('/crear', contactController.crear)
//Editar contacto (POST)
router.post('/editar', contactController.editar)
//Borrar contacto (GET)
router.get('/borrar/:id', contactController.borrar)

module.exports = router