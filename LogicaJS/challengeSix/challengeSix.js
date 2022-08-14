let fruits = []
let dairy = []  // laticínios
let candys = []
let frozen = []

let food = ""
let category = ""
let opt = "Sim"
let remove = ""

while (opt != "Não" || opt != "não") {
    if (fruits.length === 0 && dairy.length === 0 && candys.length === 0 && frozen.length) {
        opt = prompt("Deseja adicionar algum item na sua lista de compras? (Sim ou Não)");
    } else {
        opt = prompt("Deseja (Adicionar), (Manter) ou (Remover) algum item na sua lista de compras?");
    }

    while (opt != "Manter" && opt != "Adicionar" && opt != "Remover") {
        alert(`Operação não reconhecida`)
        opt = prompt("Deseja (Adicionar), (Manter) ou (Remover) algum item na sua lista de compras?");
    }

    if (opt === "Manter" || opt === "manter") {
        break
    }

    if (opt === "Adicionar" || opt == "adicionar") {

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

    }else if(opt === "Remover" || opt == "remover"){
        if(fruits.length === 0 && dairy.length === 0 && 
            candys.length === 0 && frozen.length === 0){ 
            alert(`A lista está vazia!`)
        }else{
            remove = prompt(`
                Lista de compras:\nFrutas: ${fruits}\nLaticínios: ${dairy}\nDoces: ${candys}\nCongelados: ${frozen}\n\nQual produto você deseja remover?`);

                if(fruits.indexOf(remove) != -1){
                    fruits.splice(fruits.indexOf(remove), 1);
                    alert(`O item ${remove} foi removido com sucesso!`)

                } else if(dairy.indexOf(remove) != -1){
                    dairy.splice(dairy.indexOf(remove), 1)
                    alert(`O item ${remove} foi removido com sucesso!`)

                } else if (candys.indexOf(remove) != -1){
                    candys.splice(candys.indexOf(remove), 1)
                    alert(`O item ${remove} foi removido com sucesso!`)

                } else if (frozen.indexOf(remove) != -1){
                    frozen.splice(frozen.indexOf(remove), 1)
                    alert(`O item ${remove} foi removido com sucesso!`)

                } else {
                    alert(`Não foi possível encontrar o item dentro da lista!`)
                }
        }
    }
}