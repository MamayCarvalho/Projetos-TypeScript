const P: number = 15.00;
const M: number = 20.00;
const G: number = 25.00;

const escolherPizza = prompt("Escolha o tamanho da Pizza: P - Pequena, M - Média, G - Grande.");
let adicionarPepperoni = prompt("Deseja adicionar Pepperoni? Informe S para 'Sim' ou N para 'Não'");
let adicionarQueijo = prompt("Deseja adicionar queijo? Informe S para 'Sim' ou N para 'Não'");
let valor: number = 0;

function pizzaria2(){

    switch(escolherPizza){
        case 'P': 
        if(adicionarPepperoni === "S" && adicionarQueijo === "S") {
            valor = P + 2 + 1;
            return valor;
        } else if(adicionarPepperoni === "S" && adicionarQueijo === "N"){
            valor = P + 2;
            return valor;
        } else if(adicionarPepperoni === "N" && adicionarQueijo === "S"){
            valor = P + 1;
            return valor;
        } else{
            valor = P;
            return valor;
        }
        case 'M': 
        if(adicionarPepperoni === "S" && adicionarQueijo === "S") {
            valor = M + 3 + 1;
            return valor;
        } else if(adicionarPepperoni === "S" && adicionarQueijo === "N"){
            valor = M + 3;
            return valor;
        } else if(adicionarPepperoni === "N" && adicionarQueijo === "S"){
            valor = M + 1;
            return valor;
        } else{
            return M;
        }
        
        case 'G': 
        if(adicionarPepperoni === "S" && adicionarQueijo === "S") {
            valor = G + 3 + 1;
            return valor;
        } else if(adicionarPepperoni === "S" && adicionarQueijo === "N"){
            valor = G + 3;
            return valor;
        } else if(adicionarPepperoni === "N" && adicionarQueijo === "S"){
            valor = G + 1;
            return valor;
        } else{
            return G;
        }

        default:
            return 0;
    }
}
const totalPedido = pizzaria2();
alert('Tamanho: ' + escolherPizza + ' Pepperoni: ' + adicionarPepperoni + ' Queijo: ' + adicionarQueijo + 
'\nO valor total do pedido é de R$: ' + totalPedido.toFixed(2));