const prompt = require('prompt-sync')();

const vitorias = parseInt(prompt('Digite a quantidade de vitórias: '));
const derrotas = parseInt(prompt('Digite a quantidade de derrotas: '));


function calcularNivel(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  let nivel;
  if (saldo <= 10) {
    nivel = 'Ferro'
  }
  else if (saldo >= 11 && saldo <= 20) {
    nivel = 'Bronze'
  }
  else if (saldo >= 21 && saldo <= 50) {
    nivel = 'Prata'
  }
  else if (saldo >= 51 && saldo <= 80) {
    nivel = 'Ouro'
  }
  else if (saldo >= 81 && saldo <= 90) {
    nivel = 'Diamante'
  }
  else if (saldo >= 91 && saldo <= 100) {
    nivel = 'Lendário'
  }
  else {
    nivel = 'Imortal'
  }
  return { saldo, nivel };
}

const resultado = calcularNivel(vitorias, derrotas);
const saldo = resultado.saldo;
const nivel = resultado.nivel;

console.log(`O herói tem de saldo de ${saldo} vitórias e está no nível: ${nivel}.`);





