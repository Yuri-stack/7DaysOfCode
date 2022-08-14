const number = Math.floor(Math.random() * (10 - 0 + 1) + 0);

let resp = ""
let check = false
let attempts = 3
let chances = attempts

for(let counter = 0; counter < attempts; counter++){
    resp = prompt("Estou pensando em um número entre 0 e 10, qual é?")

    if(resp == number){
        alert(`Parabéns! O número que pensei era ${number}`)
        check = true
        break
    }

    chances--

    if(chances > 0){
        alert(`Errado, tente de novamente. Você ainda tem ${chances} tentativa(s).`)
    }

}

if(!check){
    alert(`Infelizmente você não adivinhou. O número era ${number}`)
}