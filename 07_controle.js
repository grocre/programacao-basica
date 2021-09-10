//estrutuas de controle

const isTrue = false;

//if e else -> se -> senão 

const test = (isTrue) => {
    if (isTrue) { // se for verdade
        console.log("Verdadeiro");
    } else {
        console.log("Não é verdadeiro");
    }
}

//ainda temos os else if -> explicar else if

test(isTrue)

//operador ternario
 
//falar sobre componentes web -> se estiver selecionado ele fica azul -> senão fica cinza
const estilo = selecionado => selecionado ? "blue" : "grey"

console.log(estilo(true));


// for
 
for(let i = 0; i < 10; i ++){
    console.log(i);
}


//while 

let num = 0

while(num != 10){ // falar de operadores lógicos
    num ++ // incremento -> falar sobre
    console.log(num)
}


