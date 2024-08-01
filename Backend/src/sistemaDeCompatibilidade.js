// sistemaDeCompatibilidade.js
const Usuario = require('./usuario');

class SistemaDeCompatibilidade {
  static verificarCompatibilidade(usuario1, usuario2) {
    const compatibilidades = {
      1: [1, 2], // Extrovertido e Sociável é compatível com Extrovertido e Sociável e Moderadamente Sociável e Cultural
      2: [1, 2, 3], // Moderadamente Sociável e Cultural é compatível com Extrovertido e Sociável, Moderadamente Sociável e Cultural e Introvertido e Caseiro
      3: [2, 3, 4], // Introvertido e Caseiro é compatível com Moderadamente Sociável e Cultural, Introvertido e Caseiro e Recluso e Independente
      4: [3, 4], // Recluso e Independente é compatível com Introvertido e Caseiro e Recluso e Independente
      5: [] // Indefinido não é compatível com nenhum perfil
    };

    if (
      compatibilidades[usuario1.tipoPersonalidade].includes(usuario2.tipoPersonalidade) &&
      compatibilidades[usuario2.tipoPersonalidade].includes(usuario1.tipoPersonalidade)
    ) {
      return "Compatível";
    } else {
      return "Não compatível";
    }
  }
}

// Exemplo de uso
const usuario1 = new Usuario('João', 1); // Extrovertido e Sociável
const usuario2 = new Usuario('Maria', 2); // Moderadamente Sociável e Cultural

console.log(SistemaDeCompatibilidade.verificarCompatibilidade(usuario1, usuario2)); // Compatível

const usuario3 = new Usuario('Carlos', 4); // Recluso e Independente

console.log(SistemaDeCompatibilidade.verificarCompatibilidade(usuario1, usuario3)); // Não compatível
