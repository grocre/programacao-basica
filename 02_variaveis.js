//forma de guardar um dado em um espaço da memoria

//javascript pode armazenar até funções numa variavel

//existem 3 tipos de variaveis: const, var, let

// fazer analogia do armário

const nome = "Gabriel"; // declaração de variável
//nome = "Thiago"; // TypeError: Assignment to constant variable.

// então variáveis do tipo constante não podem ser trocadas depois de declaradas

// A diferença entre Var e Let 

{ // limitação de escopo - explicar sobre vida das variáveis
    let preco = 15 // preco is not defined
    var valor = 15
}

{

}

{
    {
        {
            // console.log(preco); // comentar para executar a segunda parte
            console.log(valor); 
        }
    }
}

