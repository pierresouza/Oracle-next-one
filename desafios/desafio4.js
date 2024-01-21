// Mensagem de boas-vindas
var nome = "Seu Nome";
console.log("Olá, " + nome + "!");

// Pergunta sobre a linguagem de programação favorita
var linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(linguagemFavorita);

// Soma de dois valores
var valor1 = 10;
var valor2 = 20;
var resultado = valor1 + valor2;
console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultado + ".");

// Subtração de dois valores
resultado = valor1 - valor2;
console.log("A diferença entre " + valor1 + " e " + valor2 + " é igual a " + resultado + ".");

// Verificação da idade
var idade = prompt("Insira sua idade:");
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Verificação do número
var numero = prompt("Insira um número:");
if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

// Impressão dos números de 1 a 10
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Verificação da nota
var nota = 7;
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Geração de números aleatórios
console.log(Math.random()); // Número aleatório entre 0 e 1
console.log(Math.floor(Math.random() * 10) + 1); // Número inteiro entre 1 e 10
console.log(Math.floor(Math.random() * 1000) + 1); // Número inteiro entre 1 e 1000
