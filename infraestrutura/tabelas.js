class Tabelas {
    init(conexao){
        this.conexao = conexao
        this.cadastroPaciente()
        this.cadastroMedico
        this.criarProntuário
    }


    cadastroPaciente(){
        const sql = 'CREATE TABLE IF NOT EXISTS Pacientes'
                    + '(id int NOT NULL AUTO_INCREMENT,'
                    + 'nome varchar(50) NOT NULL,'
                    + 'cpf int (10) NOT NULL,'
                    + 'nascimento date NOT NULL,'
                    + 'endereço text NOT NULL,'
                    + 'celular int (11) NOT NULL,'
                    + 'sexo varchar(50) NOT NULL,'
                    + 'dataCadastro date NOT NULL,'
                    + 'historico text NOT NULL,'
                    + 'PRIMARY KEY(id))';
        this.conexao.query(sql, erro => {
            if(erro){
                console.log('Erro na conexao: ' + erro)
            } else{
                console.log('Tabela Pacientes criada com sucesso')
            }
        })            
    }

    cadastroMedico(){
        const sql = 'CREATE TABLE IF NOT EXISTS Medicos'
                    + '(idMed int NOT NULL AUTO_INCREMENT,'
                    + 'nome varchar(50) NOT NULL,'
                    + 'cpf int (10) NOT NULL,'
                    + 'nascimento date NOT NULL,'
                    + 'endereço text NOT NULL,'
                    + 'celular int (11) NOT NULL,'
                    + 'email varchar (50) NOT NULL,'
                    + 'sexo varchar(50) NOT NULL,'
                    + 'dataCadastro date NOT NULL,'
                    + 'historico text NOT NULL,'
                    + 'crm varchar (50) NOT NULL,'
                    + 'PRIMARY KEY(id))';
        this.conexao.query(sql, erro => {
            if(erro){
                console.log('Erro na conexao: ' + erro)
            } else{
                console.log('Tabela Médicos criada com sucesso')
            }
        })            
    }

    criarLaudo(){
        const sql = 'CREATE TABLE IF NOT EXISTS Medicos'
                    + '(idLau int NOT NULL AUTO_INCREMENT,'
                    + 'nome varchar(50) NOT NULL,'
                    + 'cpf int (10) NOT NULL,'
                    + 'nascimento date NOT NULL,'
                    + 'endereço text NOT NULL,'
                    + 'celular int (11) NOT NULL,'
                    + 'email varchar (50) NOT NULL,'
                    + 'sexo varchar(50) NOT NULL,'
                    + 'dataCadastro date NOT NULL,'
                    + 'historico text NOT NULL,'
                    + 'crm varchar (50) NOT NULL,'
                    + 'PRIMARY KEY(id))';
        this.conexao.query(sql, erro => {
            if(erro){
                console.log('Erro na conexao: ' + erro)
            } else{
                console.log('Tabela Médicos criada com sucesso')
            }
        })            
    }


}

module.exports = new Tabelas  