// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **ou** por 3.

// Faça isso:

// **a)** Utilizando ifs aninhados
// ```jsx
//     if(expressao){
//         if(expressao){

//         }
//     }
// ```
// **b)** Utilizando um operador lógico para unir duas operações relacionais
// ```jsx
//     if(expressao && expressao){
//         // utilizamos && para E 

//     }

//     if(expressao || expressao){
//         // utilizamos o II para OU
//     }
// ```
const numero = Number(prompt("Escolha um número"))
if (numero % 2 === 0) {
    if (numero % 3 === 0) {
        console.log(`${numero} é divisível por 2 e por 3`)
    } else {
        console.log(`${numero} é divisível por 2, mas não é divisível por 3`)
    }
} else {
    if (numero % 3 === 0) {
        console.log(`${numero} é divisível por 3`)
    } else {
        console.log(`${numero} não é divisível por 2 nem por 3`)
    }
}

if (numero % 2 === 0 || numero % 3 === 0) {
    console.log(`${numero} é divisível por dois ou por três`)
} else {
    console.log(`${numero} não é divisível por 2 ou por 3`)
}
