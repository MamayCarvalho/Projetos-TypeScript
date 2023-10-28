"use strict";
function pizzaria() {
    const P = 15.00;
    const M = 20.00;
    const G = 25.00;
    const escolhaPizza = Number(prompt("Informe o tamanho da Pizza que deseja: P - Pequena, M - Média, G - Grande"));
    let adicionalPepperoni = prompt("Deseja adicionar Pepperoni? S - sim , N - Não");
    let adicionalQueijo = prompt("Deseja adicionar Queijo? S - sim , N - Não");
    let totalpedido = 0;
    switch (escolhaPizza) {
        case P:
            adicionalPepperoni = prompt("Deseja adicionar Pepperoni? S - sim , N - Não");
            if (adicionalPepperoni == "S" || adicionalPepperoni == "Sim") {
                totalpedido = P + 2;
                return totalpedido;
            }
            adicionalQueijo = prompt("Deseja adicionar Queijo? S - sim , N - Não");
            if (adicionalQueijo == "S" || adicionalQueijo == "Sim") {
                return totalpedido + 1;
            }
            break;
        case M:
            adicionalPepperoni = prompt("Deseja adicionar Pepperoni? S - sim , N - Não");
            if (adicionalPepperoni == "S" || adicionalPepperoni == "Sim") {
                totalpedido = M + 3;
                return totalpedido;
            }
            adicionalQueijo = prompt("Deseja adicionar Queijo? S - sim , N - Não");
            if (adicionalQueijo == "S" || adicionalQueijo == "Sim") {
                return totalpedido + 1;
            }
            break;
        case G:
            adicionalPepperoni = prompt("Deseja adicionar Pepperoni? S - sim , N - Não");
            if (adicionalPepperoni == "S" || adicionalPepperoni == "Sim") {
                totalpedido = M + 3;
                return totalpedido;
            }
            adicionalQueijo = prompt("Deseja adicionar Queijo? S - sim , N - Não");
            if (adicionalQueijo == "S" || adicionalQueijo == "Sim") {
                return totalpedido + 1;
            }
            break;
        default:
            return "Opção Inválida";
            break;
    }
}
const resultados = pizzaria();
alert(resultados);
