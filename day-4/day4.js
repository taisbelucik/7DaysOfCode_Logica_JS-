// Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

// No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

// Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

var digitaNumero = prompt('Adivinhe qual é o número, digite um número entre 0 e 10')



if(digitaNumero > 10){
    alert('Esse número não é válido, precisa ser entre 0 e 10')
    } else if(digitaNumero == 7){
        alert('Parabéns, você acertou')
    } else if(digitaNumero =! 7|| digitaNumero < 10){
        var vidas = 3
        while(vidas > 0){
          vidas--
            prompt(`Número incorreto, você possui mais ${vidas} chances`)
        }if(vidas === 0){
            prompt('sinto muito, você perdeu, o número correto é 7')
        }
    
    }


// COM NÚMERO RANDOMICO
//     const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
// let chute = "";
// let acertou = false;

// for(let contador = 0; contador < 3; contador++){    
//     chute = prompt("Tente adivinhar o número de 0 a 10:");
//     if(chute == numeroAdivinhacao){
//         alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
//         acertou = true;
//         break;
//     }
//     alert("Errado!");
// }
// if(!acertou){
//     alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
// }