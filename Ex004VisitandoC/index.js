const nome = prompt("qual é o seu nome??")
let p = prompt("Você ja visitou alguma cidade?")
let contagem = 0
cidades = ""


while(p === "sim"){
  let cidade = prompt("qual o nome da cidade visitada")
 cidades += "-" + cidade + "\n"
 contagem ++
p =  prompt("você ja viajou para mais alguma cidade?")
if (p === "nao"){
  break
}
}

alert(`Olá ${nome}! Você visitou cerca de ${contagem} cidades sendo elas: \n${cidades}`)