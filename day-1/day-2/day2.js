// Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?

// À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

// No final, o sistema vai exibir a mensagem:

// "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"



var nome = prompt('Qual o seu nome ?')
var idade = prompt('Quantos anos você tem ?')
var linguagem = prompt('Qual linguagem de programação você está estudando?')
window.alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

