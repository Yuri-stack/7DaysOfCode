/*
Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.

*/

const area = prompt("Qual área você deseja seguir: Front-End ou Back-End? Digite o nome da área:")

let language = ""

if(area == "Front-End"){
    language = prompt("Você quer aprender React ou aprender Vue?")
}else if(area == "Back-End"){
    language = prompt("Você quer aprender C# ou aprender Java?")
}else{
    alert("Você inseriu uma opção inválida")
}

const opt = prompt("Digite 1 para se Especializar na área, ou 2 para se tornar Fullstack")

if(opt == "1"){
    alert(`Continue estudando ${language} para se especializar na área de ${area}`)
}else if(opt == "2"){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${language} se você quer se tornar Fullstack!`)
}else{
    alert("Você não inseriu um valor válido!")
}

let msg = 
    prompt("Deseja estudar mais alguma Linguagem? Digite 'Sim' em caso positivo.")

while (msg === "Sim"){
    let novaTecnologia = prompt("Qual?")
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Mais alguma tecnologia? Digite 'Sim' caso queira continuar.")
}

alert("Finalizando o Programa")