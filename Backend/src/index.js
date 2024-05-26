const express = require('express');
// Cria uma instância do aplicativo Express
const app =express();

// Define a porta na qual o servidor irá escutar
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Inicia o servidor e faz com que ele comece a escutar na porta definida
app.listen(port, () => {
    // Exibe uma mensagem no console quando o servidor está funcionando
  console.log(`Server is running at http://localhost:${port}`);
});

//Importa a classe Usuario do arquivo usuario.js
const Usuario = require('./usuario');

// Objeto para armazenar usuários em memória
// Apagar quando implementar o banco de dados MySQL
let usuarios = {}; 


// Rota para cadastrar um novo usuário
app.post('/usuarios', (req, res) => {
    const { nome, idade, user, email, telefone, sexo } = req.body;
    const novoUsuario = new Usuario(nome, idade, user, email, telefone, sexo);

    // Verifica se o usuário é maior de idade
    const maiorDeIdade = novoUsuario.isMaiorDeIdade();

    // Adicione lógica para salvar o usuário em um banco de dados aqui

        // Verifica se o usuário é maior de idade
        if (novoUsuario.isMaiorDeIdade()) {
            // Adicione lógica para salvar o usuário em um banco de dados aqui
    
            res.status(201).send({
                message: 'Usuário cadastrado com sucesso',
                usuario: novoUsuario
            });
        } else {
            res.status(400).send({
                message: 'Cadastro não permitido. O usuário deve ser maior de 18 anos.'
            });
        }

});

// Rota para atualizar dados do usuário
app.put('/usuarios/:user', (req, res) => {
    const user = req.params.user;
    const dadosAtualizados = req.body;

    if (usuarios[user]) {
        usuarios[user].atualizarDados(dadosAtualizados);

        res.status(200).send({
            message: 'Dados atualizados com sucesso',
            usuario: usuarios[user]
        });
    } else {
        res.status(404).send({
            message: 'Usuário não encontrado'
        });
    }
});