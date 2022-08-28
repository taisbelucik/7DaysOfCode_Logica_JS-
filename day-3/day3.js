// // Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

// // 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

// // 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

// // 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

// // 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

// // O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

// // Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.

var frontBack = prompt("Qual área você quer seguir? Front-End ou Back-End?");

if (frontBack === "Front-End") {
  var reactVue = prompt("No Front-End você quer aprender React ou Vue ?");
  if (reactVue === "React" || "Vue") {
    var resp = prompt("quer se especializar apenas nessa área, Sim ou não?");
  }
  if (resp === "Sim") {
    window.alert("excelente caminho");
  } else if (resp === "não") {
    var resp1 = prompt(
      "Então você gostaria de estudar para se tornar um fullStack, sim ou não?"
    );
    if (resp1 === "Sim") {
      window.alert("Essa área é excelente");
    } else if (resp1 === "não") {
      var outraArea = window.alert("É muito importante escolher um caminho");
    }
  }
} else if (frontBack === "Back-End") {
  var cJava = prompt("No Back-End você quer aprender C# ou aprender Java ?");
  if (cJava === "C#" || "Java") {
    var resp2 = prompt("quer se especializar apenas nessa área, Sim ou não?");
  }
  if (resp2 === "Sim") {
    window.alert("excelente caminho");
  } else if (resp2 === "não") {
    var resp3 = prompt(
      "Então você gostaria de estudar para se tornar um fullStack, sim ou não?"
    );
    if (resp3 === "Sim") {
      window.alert("Essa área é excelente");
    } else if (resp3 === "não") {
      var outraArea1 = alert("Estude e busque encontrar um caminho");
    }
  }
}

var outraTec = prompt("Há outra tecnologia que você gostaria de aprender? Digite 'sim' em caso positivo."
);
while (outraTec === "sim") {
  var tecNova = prompt("Qual seria ?");
  alert(`${tecNova} é muito bacana!`);
  outraTec = prompt(
    "Há outra tecnologia que você gostaria de aprender? Digite 'sim' em caso positivo."
  );
}
