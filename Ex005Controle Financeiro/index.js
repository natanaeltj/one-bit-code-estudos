let dinheiro = parseFloat(prompt("Indique o seu saldo bancario atual:"))
let op = parseFloat(0)

do {
const pergunta = parseFloat(prompt(`O seu saldo bancario é de ${dinheiro}, o que você deseja fazer? \n1 - Adicionar dinheiro \n2 - Remover dinheiro \n3 - Sair do programa`))
if (pergunta == 1) {
  op = parseFloat(prompt("Informe a quantia a ser adicionada:"))
  dinheiro = dinheiro + op
  alert(`Você adicionou ${op} na sua conta`)
} else if(pergunta == 2){
  op = parseFloat(prompt("Informe a quantia a ser retirada"))
  dinheiro = dinheiro - op
  alert(`você retirou ${op} na sua conta`)
} else if(pergunta == 3){
  break
}


} while (dinheiro > 0 )

alert("Este programa foi encerrado")