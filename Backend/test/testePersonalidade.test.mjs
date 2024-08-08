import { expect } from 'chai';
import * as testePersonalidade from '../src/testePersonalidade.js';

const { calcularResultado } = testePersonalidade;

describe('Teste de Personalidade', () => {
  it('Deve retornar Extrovertido para respostas correspondentes', () => {
    const respostas = [
      { perguntaId: 0, respostaId: 0 }, // Extrovertido
      { perguntaId: 1, respostaId: 3 }, // Extrovertido
      { perguntaId: 2, respostaId: 0 }, // Extrovertido
      { perguntaId: 3, respostaId: 0 }  // Extrovertido
    ];

    const resultado = calcularResultado(respostas);
    expect(resultado.tipo).to.equal('Extrovertido');
    expect(resultado.descricao).to.equal('Você adora socializar e prefere estar entre amigos.');
  });

  it('Deve retornar Introvertido para respostas correspondentes', () => {
    const respostas = [
      { perguntaId: 0, respostaId: 3 }, // Introvertido
      { perguntaId: 1, respostaId: 2 }, // Introvertido
      { perguntaId: 2, respostaId: 2 }, // Introvertido
      { perguntaId: 3, respostaId: 1 }  // Introvertido
    ];

    const resultado = calcularResultado(respostas);
    expect(resultado.tipo).to.equal('Introvertido');
    expect(resultado.descricao).to.equal('Você prefere atividades mais tranquilas e gosta de momentos de paz.');
  });
});
