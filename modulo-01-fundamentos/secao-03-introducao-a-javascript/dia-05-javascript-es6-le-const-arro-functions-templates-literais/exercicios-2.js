// Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
const pessoa = {
  nome: "Henri",
  idade: 20,
};
pessoa.nome = "Luna";
pessoa.idade = 19;

// Altere essa estrutura para corrigir o erro.
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);

// exercicio 3:
let favoriteFood = "Lasanha";
favoriteFood = "Hambúrguer";
console.log(favoriteFood);

// exercicio 4:

const name = "Adriana";
const lastName = "Soares";
console.log(`Olá ${name} ${lastName}!`);

function soma(a, b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log("O resultado da soma de " + a + " + " + b + " é: " + soma(a, b));

// Exercicio 5
const numeroAleatorio = () => Math.random();

console.log(numeroAleatorio());
