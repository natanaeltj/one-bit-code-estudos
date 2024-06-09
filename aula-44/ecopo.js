let pokemon = "Charmander" //<-- Escopo externo

//O escopo é o contexto onde a variavel foi declarada sendo:

function evoluir() {
pokemon = "Charmeleon"  //<-- Escopo interno
}
console.log(pokemon)
evoluir()
console.log(pokemon)

function criarAnimal() {
  let animal = "gato" //<- não é possivell que variaveis criadas em um escopo interno sejam chamadas para um escopo externo

  }

  criarAnimal()
  //console.log(animal)

  function avaliarNota(nota){
    if ( nota > 60){
      var aprovado = true  //<- Este contexto não se aplica a variavel var em blocos como if, else, repetições mas não se aplica em funções
      let situacao = "aprovado"
    } else {
      var aprovado = false
      let situacao = "Reprovado"
    }
    console.log(nota)
  console.log(aprovado)
  console.log(situacao)
  }
  
  avaliarNota(83)
  avaliarNota(49)