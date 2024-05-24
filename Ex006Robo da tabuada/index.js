const numero = prompt("indique um numero para ser calculado")

let resultado = ""

for (let multiplicacao = 1 ; multiplicacao <= 20 ; multiplicacao++) {

  resultado += "->" + numero + "*" + multiplicacao + "=" + (numero * multiplicacao) + "\n"

  }

  alert(`Resultado da tabuada de ${numero}:\n\n` + resultado)