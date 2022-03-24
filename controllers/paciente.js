const Paciente = require('../models/paciente')



module.exports = app => {
    app.get('/paciente', (req, res) => {
        Paciente.lista(res)

    })

    app.get('/paciente/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Paciente.buscaPorId(id, res)

    })

    app.post('/paciente', (req, res) => {
        const paciente = req.body
        Paciente.adiciona(paciente, res)

    })
}


