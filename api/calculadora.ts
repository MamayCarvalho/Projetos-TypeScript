// Função principal da calculadora
function calculadora() {
    // Solicitando para o usuário dois números para realizar o calculo
    const primeiroNumero = Number (prompt("Informe o primeiro número: "));
    const segundoNumero = Number (prompt("Informe o segundo número: "));

// Solicitar ao usuário o tipo de operação
const operacao = prompt("Qual a operação você deseha realizar? Soma, Subtração, Multiplicação ou Divisão: ");

operacao?.toUpperCase;

// Realizar a operação de escolha
    switch(operacao){
        case "soma": 
            return primeiroNumero + segundoNumero;
            break;
    
        case "subtração": 
            return primeiroNumero - segundoNumero;
            break;

        case "multiplicação":
            return primeiroNumero * segundoNumero;
            break;

        case "divisão":
            return primeiroNumero / segundoNumero;
            break;
            
        default: 
            return "Operação inválida";
            break;
    }
}

// Chamar a função principal 
const resultado = calculadora();

// Exibir o resultado da operação

alert (resultado);