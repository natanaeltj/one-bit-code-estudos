let pergunta = "Seja bem vindo ao menu interativo, o que você deseja fazer: \n Digite 1 - Para Salvar um novo imovel \n Digite 2 - Para ver todos os imoveis salvos \n Digite 3 - Para finalizar este programa =("
let imoveis = [] // onde irão ficar salvos os imoveis, e este new array pode ser ultilizado para ultilizar um array de objetos




do {

  pergunta = prompt(`Imoveis salvos - ${imoveis.length} \n O que você deseja fazer agora: \n Digite 1 - Para salvar um novo imovel \n Digite 2 - Para ver todos os imoveis salvos \n Digite 3 - Para finalizar este programa `)

  switch (pergunta) {
    case "1":
      const imovel = {}
    imovel.proprietario = prompt("Insira o nome do proprietario:")
    imovel.quarto = parseFloat(prompt("Insira a quantidade de quartos:"))
    imovel.banheiro = parseFloat(prompt("inisira a quantidade de banheiros:"))
    imovel.garagem = prompt("Ele possui garagem?") 

    const confirmação = confirm(`Salvar este imovel?\n Proprietario - ${imovel.proprietario} \n Quartos - ${imovel.quarto}\n Banheiros - ${imovel.banheiro} \n Possui garagem - ${imovel.garagem}`)
  
    if(confirmação){
      imoveis.push(imovel)
    }
    
 
    
      break;
      case "2":
    for (let i = 0; i < imoveis.length; i++) {
      alert(`Imovel ${i + 1}\n Proprietario - ${imoveis[i].proprietario} \n Quartos - ${imoveis[i].quarto}\n Banheiros - ${imoveis[i].banheiro} \n Possui garagem - ${imoveis[i].garagem} `
      )
      
    }
      

      break;

      case "3":

      alert("Obrigado por ultilizar este programa =)")
      break;

    default:
      alert("Opção inválida!")
      break;
  }
} while (pergunta !== "3");

