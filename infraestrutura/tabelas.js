class Tabelas {
    init(conexao){
        this.conexao = conexao
        this.cadastroPessoa()
        this.cadastroAtendimento()
    }


    cadastroPessoa(){
        const sql = 'CREATE TABLE IF NOT EXISTS Pessoas'
                    + '(id int NOT NULL AUTO_INCREMENT,'
                    + 'nome varchar(50) NOT NULL,'
                    + 'cpf varchar (11) NOT NULL,'
                    + 'nascimento datetime NOT NULL,'
                    + 'tipoSanguineo varchar (3) NOT NULL,'
                    + 'celular varchar (12) NOT NULL,'
                    + 'sexo varchar (12) NOT NULL,'
                    + 'statusPessoa varchar (20) NOT NULL,'
                    + 'PRIMARY KEY(id))';
        this.conexao.query(sql, erro => {
            if(erro){
                console.log('Erro na conexao: ' + erro)
            } else{
                console.log('Tabela Pessoas criada com sucesso')
            }
        })            
    }

    cadastroAtendimento(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos'
                    + '(idAtendimento int NOT NULL AUTO_INCREMENT,'
                    + 'dataEntrada datetime NOT NULL,'
                    + 'dataSaida datetime,'
                    + 'statusAtendimento varchar(50) NOT NULL,'
                    + 'PRIMARY KEY(idAtendimento))';
        this.conexao.query(sql, erro => {
            if(erro){
                console.log('Erro na conexao: ' + erro)
            } else{
                console.log('Tabela Atendimento criada com sucesso')
            }
        })            
    }

}

module.exports = new Tabelas  