const prompt = require('prompt-sync')();

const heroi = prompt('Digite o nome do seu Herói: ');
const xp = prompt('Digite a quantidade de experiência conquistada pelo seu Herói: ');
let nivel = []

if (xp <= 1000) {
  nivel.push('Ferro');
}
else if (xp >= 1001 && xp <= 2000) {
  nivel.push('Bronze');
}
else if (xp >= 2001 && xp <= 5000) {
  nivel.push('Prata');
}
else if (xp >= 5001 && xp <= 7000) {
  nivel.push('Ouro');
}
else if (xp >= 7001 && xp <= 8000) {
  nivel.push('Platina');
}
else if (xp >= 8001 && xp <= 9000) {
  nivel.push('Ascendente');
}
else if (xp >= 9001 && xp <= 10000) {
  nivel.push('Imortal');
}
else if (xp > 10001) {
  nivel.push('Radiante');
}

console.log(`O Herói de nome ${heroi} está no nível: ${nivel}`);






