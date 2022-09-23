const Contact = require('../model/Contact')

//Mostrar
module.exports.mostrar = (req, res) => {
    Contact.find({}, (error, contactos)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error al mostrar los contactos'
            })
        }
        return res.render('index', {contactos: contactos})
    })
}

//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const contact = new Contact({
        nombre: req.body.nombre,
        edad: req.body.edad,
        phone_number: req.body.phone_number
    })
    contact.save(function(error,contacto){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el contacto'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const edad = req.body.edad_editar
    const phone_number = req.body.phone_number_editar
    Contact.findByIdAndUpdate(id, {nombre, edad, phone_number}, (error, contacto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el contacto'
            })
        }
        res.redirect('/')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Contact.findByIdAndRemove(id, (error, contacto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el contacto'
            })
        }
        res.redirect('/')
    })
}