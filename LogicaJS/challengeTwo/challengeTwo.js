// Desenvolva um programa que peça para o usuário responder 3 perguntas:
// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?

// E imprima:

// "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

let userName, userAge, language, opt

userName = prompt("Qual o seu nome?")
userAge = prompt("Quantos anos você tem?")
language = prompt("Qual linguagem de programação você está estudando?")

alert(`Olá ${userName}, você tem ${userAge} anos e já está aprendendo ${language}!`)

opt = prompt(`
    Você gosta de estudar ${language}? 
    Responda com o número 1 para SIM ou 2 para NÃO.
`)

switch (opt) {
    case '1':
        alert("Muito bom! Continue estudando e você terá muito sucesso.")
    case '2':
        alert("Ahh que pena... Já tentou aprender outras linguagens?")
    default:
        alert("Opção inválida")
}

document.open();
document.write("<h1>Fim da Execução</h1>");
document.close();