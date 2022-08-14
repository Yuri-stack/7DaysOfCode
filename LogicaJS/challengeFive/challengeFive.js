let fruits = []
let dairy = []  // laticínios
let candys = []
let frozen = []

let food = ""
let category = ""
let addMore = "Sim"

while(addMore != "Não" || addMore != "não"){
    addMore = prompt("Deseja adicionar algum item na sua lista de compras? (Sim ou Não)")

    while(addMore != "Não" && addMore != "Sim"){
        alert(`Operação não reconhecida`)
        addMore = prompt("Deseja adicionar algum item na sua lista de compras? (Sim ou Não)")
    }

    if(addMore === "Não" || addMore === "não"){
        break
    }

    food = prompt("Qual comida você deseja inserir?")
    category = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?")
    
    switch(category){
        case 'frutas':
            fruits.push(food)
            break
        case 'laticínios':
            dairy.push(food)
            break
        case 'doces':
            candys.push(food)
            break
        case 'congelados':
            frozen.push(food)
            break
        default:
            alert("Essa categoria não foi pré-definida")
    }
}

alert(`Lista de compras:\n  Frutas: ${fruits}\n  Laticínios: ${dairy}\n  Doces: ${candys}\n  Congelados: ${frozen}`);
