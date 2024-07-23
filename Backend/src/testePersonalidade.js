// app.js
const express = require('express');
const bodyParser = require('body-parser');
const perguntas = require('./perguntas');
const Usuario = require('./usuario');

const app = express();
app.use(bodyParser.json());

function calcularPersonalidade(respostas) {
  const perfis = { 1: 0, 2: 0, 3: 0, 4: 0 };

  respostas.forEach((resposta, indice) => {
    const perfil = perguntas[indice].respostas[resposta].perfil;
    perfis[perfil]++;
  });

  const maxPontuacao = Math.max(...Object.values(perfis));
  const personalidadesMaximas = Object.keys(perfis).filter(
    perfil => perfis[perfil] === maxPontuacao
  );

  if (personalidadesMaximas.length > 1) {
    return 5; // Indefinido
  }

  return parseInt(personalidadesMaximas[0], 10);
}

app.post('/testePersonalidade', (req, res) => {
  const respostas = req.body.respostas;
  const personalidade = calcularPersonalidade(respostas);

  const usuario = new Usuario('João'); // Nome pode ser passado no request
  usuario.setPersonalidade(personalidade);

  res.json({ personalidade: usuario.getPersonalidade() });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
