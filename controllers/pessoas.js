const Pessoa = require('../models/Pessoa')

module.exports = app => {
    app.get('/Pessoa', (req, res) => {
        Pessoa.lista(res)
    })

    app.get('/Pessoa/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Pessoa.buscaPorId(id, res)
    })

    app.post('/Pessoa', (req, res) => {
       const pessoa = req.body

       Pessoa.adiciona(pessoa, res)
    }) 

    app.patch('/Pessoa/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Pessoa.altera(id, valores, res)
    })

    app.delete('/Pessoa/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Pessoa.deleta(id, res)
    })
}