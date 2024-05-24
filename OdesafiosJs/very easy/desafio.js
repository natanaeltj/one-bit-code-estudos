let media = [] // vai tirar a media de um aluno e salvar neste array
let pergunta = ""


do {
  pergunta = prompt("O que você deseja fazer:\n 1 - Tirar a media dos alunos \n 2 - Tirar a media da sala \n 3 - Tirar a media da escola\n 4 - Sair deste programa")

  switch (pergunta) {
    case "1":
      let notas = []
      let sum = 0
      let total = 0
      let nome = ""
      nome = prompt("Insira o nome do aluno")

      while (notas.length < 6) {
        notas.push(parseFloat(prompt("Insira as 6 notas deste aluno:")))
      }

      for (let i = 0; i < notas.length; i++) {
        total = sum += notas[i];
        total = total / 6
      }
      
      window.alert(`O aluno ${nome}  tem uma media de ${total.toFixed(2)}\n aqui estão as notas: ${notas}`)
      break
      
    case "4":
      alert("Este programa foi finalizado!")
      break

    default:
      alert("opção invalida!")


  }


} while (pergunta != 4);
