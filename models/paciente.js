const conexao = require('../infraestrutura/conexao')

class Paciente {
    adiciona(paciente) {
        const sql = 'INSERT INTO Pacientes set ?'

        conexao.query(sql, paciente, (erro, resultados) => {
            if (erro) {
                console.log('Erro na hora de subir dados pro BD: ' + erro)
            } else {
                console.log(resultados)
            }
        })
    }
    
}

module.exports = new Paciente