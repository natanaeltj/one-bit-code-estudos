let fila = []
let opcao = ""


do{
let pacientes = ""
for ( let i = 0; i < fila.length; i++ ){
  pacientes += (i + 1) + "º - " + fila[i] + "\n"
  
}

opcao = prompt(`Pacientes:\n ${pacientes}\n Escolha uma ação:\n 1. Novo paciente\n 2. Consultar paciente\n 3. Sair`)

switch(opcao){
case "1":
  const novoPaciente = prompt("Qual o nome do novo paciente?")
  fila.push(novoPaciente)
  break
  case "2":
    const pacienteConsultado = fila.shift()
    if (pacienteConsultado) {
      alert(`${pacienteConsultado} foi removido da fila`)
    } else {
      alert("Não ha pacientes na fila")
    }
    break
    case "3":
      alert("Encerrando")
      break
      default:
        alert("Opção invalida!")
}
} while(opcao !== "3")