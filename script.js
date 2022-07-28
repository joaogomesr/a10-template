// indice = posicao
// resultado boolean
// boleao: true/false

/* 
const arraystrings = ["Joao", "Gomes", "Rodrigues"];
// indice: 0, 1, 2
// tamanho 3

const arrayNumbers = [0, 1, 2];

const arrayMisto = [2, "Barbosa", true]; // boolean

const arrayUmValor = [13];

const arrayVazio = [];


// 1
console.log(arraystrings.length)
console.log(arraystrings[2])

// 3
console.log(arrayMisto.includes(true)) // correspondencia: 100%

// Array 4
console.log(arrayUmValor) */


/* const arraystrings = ["Joao", "Gomes", "Rodrigues"];

const arrayNumbers = [0, 1, 2, 31, 24, 45]; // guardei esses dados na memoria 

const copiarArray = arrayNumbers
// ele tivesse apontando para o lugar do meu array original que ele está
// console.log(copiarArray)

copiarArray.push(4)

console.log("copia: ", copiarArray)
console.log("Array Antigo: ", arrayNumbers)

const copiaDeVerdade = arrayNumbers.slice()

copiaDeVerdade.push(3)
console.log("Copia de verdade: ", copiaDeVerdade)

// Crio um array = Colocando um lugar na memoria para ele
// copia da forma errada = apontando pro lugar

copiaDeVerdade.slice(2, 3)

console.log(copiaDeVerdade)

// i = indice
// n = quatidade de elementos */

const ArrayNumero = [0, 4, 3, 5]
console.log("Array Original: ", ArrayNumero)

const QuebraDeLinha = `\n`
console.log(QuebraDeLinha)

console.log("Os numeros em ordem crescente são: ", ArrayNumero.sort())
console.log(QuebraDeLinha)

console.log("Os numeros em ordem crescente são: ", ArrayNumero.reverse())
console.log(QuebraDeLinha)

ArrayNumero.pop()
ArrayNumero.push(6)
ArrayNumero.splice(2,1)



console.log("Copia do Array Orginal: ", ArrayNumero)

