//coleção, vetor ou lista de valores
let preco = [15, 18, 50, 34]; // lista de numeros 

// o index de um array sempre começa no 0

console.log(preco[1]);

let lista = ["Gabriel", 1, true, 1.555] // o JS permite que a gente declare arrays de diversos tipos ao contrário de linguagens fortemente tipadas como Java

// função que vocês vão usar muito fazendo debug 

// JS por padrão não tem debugger 

console.log(preco.length) // 4

// maneira de adicionar valores ao array 

preco.push("string");

console.log(preco)

preco[5] = "nha"; // também podemos fazer dessa maneira -> por questões de boas práticas e melhor funcionamento do código se precisarem usem o push

console.log(preco) // por padrão arrays são objetos e objetos por sua vez são funções

// tudo no JS são funções 

console.log(Array, typeof(Object)) // explicar as palavras reservadas como letras maiusculas

// funções que retornam array 



