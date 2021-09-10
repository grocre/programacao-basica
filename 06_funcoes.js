//existem algumas maneira de definir funções


//função padrão
function soma(n1, n2){
    return n1 + n2
} 
// explicar parâmetros

console.log(soma(1, 2))

//atribuição a uma variável
let somar = function(n1, n2){
    return n1 + n2
}

console.log(somar(1, 2))

// Arrow functions
somar = (n1, n2) => { //como é uma let eu consigo reatribuir
    return n1 + n2;
}

console.log(somar(2 , 3))

// retorno implícito 
soma = (n1, n2) => n1 + n2

console.log(somar(2 , 3))

