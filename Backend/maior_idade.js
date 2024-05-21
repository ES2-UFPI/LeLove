const moment = require('moment'); // Biblioteca para facilitar a manipulação de datas


 // Função para verificar se a pessoa é maior de idade
 // @param {string} dataNascimento - Data de nascimento no formato 'DD/MM/AAAA'
 // @returns {boolean} - Retorna true se a pessoa for maior de idade, caso contrário, false
 //
function ehMaiorDeIdade(dataNascimento) {
    const idadeMinima = 18;
    const dataAtual = moment();
    const dataNasc = moment(dataNascimento, 'DD/MM/YYYY');

    if (!dataNasc.isValid()) {
        throw new Error('Data de nascimento inválida');
    }

    const idade = dataAtual.diff(dataNasc, 'years');
    return idade >= idadeMinima;
}

// Exemplo de uso
// try {
//     const dataNascimento = '21/05/2005';
//     const maiorDeIdade = ehMaiorDeIdade(dataNascimento);

//     if (maiorDeIdade) {
//         console.log('A pessoa é maior de idade.');
//     } else {
//         console.log('A pessoa é menor de idade.');
//     }
// } catch (error) {
//     console.error(error.message);
// }
