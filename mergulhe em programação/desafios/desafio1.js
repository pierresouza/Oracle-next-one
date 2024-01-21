// Exibindo um alerta de boas-vindas
alert("Boas vindas ao nosso site!");

// Declarando variáveis
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

// Exibindo um alerta de erro
alert("Erro! Preencha todos os campos.");

// Declarando e exibindo um alerta com a variável mensagemDeErro
let mensagemDeErro = "Erro! Preencha todos os campos.";
alert(mensagemDeErro);

// Usando prompt para obter o nome do usuário
nome = prompt("Digite seu nome:");

// Usando prompt para obter a idade do usuário
idade = prompt("Digite sua idade:");

// Verificando se a idade é maior ou igual a 18 e exibindo um alerta correspondente
if (idade >= 18) {
  alert("Pode tirar a habilitação!");
} else {
  alert("Desculpe, você não atende à idade mínima para tirar a habilitação.");
}
