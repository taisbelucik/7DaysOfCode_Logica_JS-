// Sabe quando você vai no supermercado com uma lista de compras e acaba ficando indo e voltando nos mesmos corredores até completar a lista?

// Você precisa de uma maçã e vai para a área de frutas. O próximo item é um leite e você segue para os laticínios. Mas em seguida você anotou a pêra, e precisa novamente retornar para a área de frutas.

// Depois que você resolver o desafio de hoje, com certeza não fará mais isso!

// Assim como a nossa lista de compras, é muito comum que programas trabalhem com listas de strings, números e objetos.

// Pense em todo catálogo de e-commerce que você já viu, na lista de eventos do seu Google Calendar, ou ainda na sua caixa de e-mails. Todos esses sites usam listas para exibir informações de uma forma simples e fácil de entender.

// Além disso, você pode aproveitar as listas para fazer filtros, ordenação, e outras funcionalidades muito úteis.

// Nesse ponto, você já deve ter percebido que trabalhar com essas coleções é algo que você vai precisar dominar, né?

// Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

// Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

// Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

// Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

// Caso você adicione na sua lista:
// banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

// O programa deverá imprimir, por exemplo:

// Lista de compras:
//     Frutas: banana, tomate, maçã, uva, abacate
//     Laticínios: leite vegetal, leite de vaca, leite em pó
//     Congelados:
//     Doces: chiclete e bala de ursinho

//DIA 6
// Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

// A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

// Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

// Por fim, ele voltará para o ciclo inicial de perguntas.

// Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

// Por exemplo: “Não foi possível encontrar o item dentro da lista!”

// Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.

let frutas = [];
let doces = [];
let congelados = [];
let laticínios = [];
let remover = "";

let digitaNaLista = prompt(
  "Você deseja adicionar um produto na lista de compras Sim ou Não?"
);

while (digitaNaLista === "Sim") {
  this.adicionar();



  while (addExcluir === "adicionar") {
    this.adicionar();
      
  }


  while (addExcluir === "excluir") {
    if (
      frutas.length === 0 &&
      laticínios.length === 0 &&
      doces.length === 0 &&
      congelados.length === 0
    ) {
      alert(`A lista está vazia!`);
    } else {
      remover = prompt(
        `Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticínios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`
      );
    }

    if(frutas.indexOf(remover) != -1){
        frutas.splice(frutas.indexOf(remover), 1)
        alert(`O item ${remover} foi removido com sucesso`)
    }else if(doces.indexOf(remover != -1)){
      doces.splice(doces.indexOf(remover, 1))
    }else if(congelados.indexOf(remover != -1)) {
      congelados.splice(congelados.indexOf(remover, 1))
    }else (laticínios.indexOf(remover != -1))
      laticínios.splice(laticínios.indexOf(remover, 1))
    
      
    
  }

  if (addExcluir === "finalizar")
    alert(
      `Sua lista de compras possui: \n Frutas: ${frutas} \n Doces: ${doces} \n Congelados: ${congelados} \n Laticínios: ${laticínios}`
    );
}

function adicionar() {
  
  digitaComida = prompt("Digite o produto que você quer colocar na sua lista");
  infoCategoria = prompt(
    "Em qual categoria esse produto está: frutas, doces, congelados ou laticínios?"
  );

  if (infoCategoria === "frutas") {
    frutas.push(digitaComida);
  } else if (infoCategoria === "doces") {
    doces.push(digitaComida);
  } else if (infoCategoria === "congelados") {
    congelados.push(digitaComida);
  } else if (infoCategoria === "laticínios") {
    laticínios.push(digitaComida);
  } else {
    alert("Digite uma categoria que está nas opções");
  }

  addExcluir = prompt(
    "Você deseja adicionar mais um produto, excluir ou finalizar a lista ?"
  );
}

alert(
  `Sua lista de compras possui: \n Frutas: ${frutas} \n Doces: ${doces} \n Congelados: ${congelados} \n Laticínios: ${laticínios}`
);