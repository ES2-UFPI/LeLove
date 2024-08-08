const perguntas = require('./perguntas');

function calcularResultado(respostas) {
  const perfis = {};

  respostas.forEach(resposta => {
    const { perguntaId, respostaId } = resposta;
    const pergunta = perguntas[perguntaId];
    const respostaEscolhida = pergunta.respostas[respostaId];

    if (!perfis[respostaEscolhida.perfil]) {
      perfis[respostaEscolhida.perfil] = 0;
    }
    perfis[respostaEscolhida.perfil] += 1;
  });

  const perfilFinal = Object.keys(perfis).reduce((a, b) => (perfis[a] > perfis[b] ? a : b));

  let resultado = { tipo: "", descricao: "" };
  switch (perfilFinal) {
    case "1":
      resultado.tipo = "Extrovertido";
      resultado.descricao = "Você adora socializar e prefere estar entre amigos.";
      break;
    case "2":
      resultado.tipo = "Equilibrado";
      resultado.descricao = "Você gosta de atividades variadas e equilibra bem entre socializar e ficar sozinho.";
      break;
    case "3":
      resultado.tipo = "Introvertido";
      resultado.descricao = "Você prefere atividades mais tranquilas e gosta de momentos de paz.";
      break;
    case "4":
      resultado.tipo = "Reflexivo";
      resultado.descricao = "Você prefere refletir e analisar antes de tomar decisões.";
      break;
    default:
      resultado.tipo = "Indefinido";
      resultado.descricao = "Seu perfil não pôde ser determinado.";
      break;
  }

  return resultado;
}

module.exports = { perguntas, calcularResultado };
