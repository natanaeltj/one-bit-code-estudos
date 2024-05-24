const cartas = []
let opcao = ""


do {
  let quantidadeCartas = ""
  for (let i = 0; i < cartas.length; i++) {

    quantidadeCartas = (i + 1) 
  }

  opcao = prompt(`Você tem ${quantidadeCartas} cartas no baralho\n O que deseja fazer agora:\n 1 - Adicionar carta\n 2 - Puxar uma carta\n 3 - Sair do programa`)

switch(opcao){

case "1" :
  let adicionarCarta =  prompt("Insira o nome da carta que você deseja adicionar:")

  if(adicionarCarta){
  cartas.push(adicionarCarta)
  alert("Você adicionou " + adicionarCarta + " ao baralho")
  } else{
    alert("Nenhuma carta foi definida")
  }
 break

 case "2" :
  if(quantidadeCartas > 0){
  let cartaRetirada = cartas.shift()
  alert(`Você retirou a ${cartaRetirada} do baralho`)
  } else{
    alert("Não há cartas no baralho!")
  }
  break

case "3":
  alert("Obrigado por ultilizar o programa")
  break

  default:
    alert("Opção invalida!!")
}

  
} while (opcao !== "3");