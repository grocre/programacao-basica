// STRINGS

const nome = 'IEEE';

// array de chars que são letras individuais -> falar do C e do Java

console.log(nome.substring(0, 3)); // pega os chars da posição inicial (0) até a posição final(3) sendo essa não inclusa

console.log(nome.replace('I', 'E')) // troca as letras do primeiro argumento (I) pela letra do segundo argumento (E) -> esse método não altera 

let interesses = "desenho, jogos, formula1, basquete, programacao";
console.log(interesses)

let interessesUpper = interesses.toUpperCase() //transfoma todos os chars da string para maiusculo
let interessesLower = interessesUpper.toLocaleLowerCase() // mesma coisa mas minusculas

console.log(interessesUpper)
console.log(interessesLower)

interesses = interesses.split(", ") // tranforma uma string em um array -> levando o argumento como lugar onde deve ser separado

console.log(interesses, typeof(interesses))

// template string

let concatenacao = "RAMO ESTUDANTIL " + nome + " CEFET \n"; // falar sobre \n
let templateString = `RAMO ESTUDANTIL ${nome} CEFET`;

console.log(concatenacao, templateString)
