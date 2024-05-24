const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//adicionar elementos
//push

let tamanho = arr.push("natan")
console.log(arr)
console.log(tamanho)
//unshit

tamanho = arr.unshift("natan")
console.log(arr)
console.log(tamanho)

// remover elementos
//pop
let ultimoElemento = arr.pop()

console.log(arr)
console.log(ultimoElemento)

//shift

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// pesquisar por um elemento
//includes

const inclui = arr.includes("Gandalf")
console.log(inclui)

//indexOf

const indice = arr.indexOf("Gandalf")
console.log(indice)

//cortar e concatenar
//slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat

const sociedade = hobbits.concat(outros, "xibiu")
console.log(sociedade)

// Substituição dos Elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "poca xibiuh") 
console.log(sociedade)
console.log(elementosRemovidos)

//Iterar sobre os Elementos
for( let indice = 0; indice < sociedade.length; indice++ ){
const elemento = sociedade[indice]
console.log(`${elemento} se encontra na posição ${indice}`)
}
