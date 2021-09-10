const membro = { // podemos colocar até funções dentro das chaves 
    nome: "Renatin", 
    cargos: ["Coordenador", "membro"], // array
    areas: ["WolfByte", "WolfBotz"], 
    projetos: {
      projeto1: "IA", 
      projeto2: "Web", 
      projeto3: "Seguidor de Linha"  
    } 
}

//objetos funcionam sempre como chave - valor

console.log(membro.projetos.projeto1) // printar - explicar direitinho o caminho

//desestruturação 

// e se eu recebe um objeto e quiser só algumas partes dele?

const {nome, cargos, areas, projetos: {projeto1}} = membro // explicar a troca de nome e pegar um objeto dentro do outro

console.log(nome, cargos, areas, projeto1) 
