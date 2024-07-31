const express = require('express');
// Cria uma instância do aplicativo Express
const app =express();

// Define a porta na qual o servidor irá escutar
const port = 3000;

// Inicia o servidor e faz com que ele comece a escutar na porta definida
app.listen(port, () => {
    // Exibe uma mensagem no console quando o servidor está funcionando
  console.log(`Server is running at http://localhost:${port}`);
});

// Configura o body-parser para analisar o corpo das requisições JSON
app.use(bodyParser.json());


//Importa a classe Usuario do arquivo usuario.js
const Usuario = require('./usuario');



// Define o caminho para o banco de dados SQLite
const dbPath = path.resolve(__dirname, 'my-database.db');

// Cria uma nova instância do banco de dados SQLite
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});

// Cria a tabela "user" se não existir
db.run(`CREATE TABLE IF NOT EXISTS user (
    nome TEXT NOT NULL,
    idade INTEGER NOT NULL,
    id INTEGER NOT NULL UNIQUE,
    email TEXT NOT NULL,
    resultado-teste TEXT,
    localizacao TEXT,
    PRIMARY KEY(id)
)`, (err) => {
    if (err) {
        console.error('Erro ao criar a tabela:', err.message);
    } else {
        console.log('Tabela "user" criada ou já existe.');
    }
});

// Rota para cadastrar um novo usuário
app.post('/usuarios', (req, res) => {
    const { nome, idade, email, resultado_teste, localizacao } = req.body;

    // Verifica se o usuário é maior de idade
    const isMaiorDeIdade = idade >= 18; // Lógica para verificar a maioridade

    if (isMaiorDeIdade) {
        // Adiciona o novo usuário ao banco de dados
        const sql = `INSERT INTO user (nome, idade, email, resultado-teste, localizacao) VALUES (?, ?, ?, ?, ?)`;
        db.run(sql, [nome, idade, email, resultado_teste, localizacao], function(err) {
            if (err) {
                return res.status(500).send({
                    message: 'Erro ao cadastrar o usuário.',
                    error: err.message
                });
            }
            res.status(201).send({
                message: 'Usuário cadastrado com sucesso',
                usuario: { id: this.lastID, nome, idade, email, resultado_teste, localizacao }
            });
        });
    } else {
        res.status(400).send({
            message: 'Cadastro não permitido. O usuário deve ser maior de 18 anos.'
        });
    }
});

// Inicia o servidor e faz com que ele comece a escutar na porta definida
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Feche a conexão com o banco de dados quando o processo for encerrado
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error('Erro ao fechar a conexão com o banco de dados:', err.message);
        } else {
            console.log('Conexão com o banco de dados fechada.');
        }
        process.exit(0);
    });
});