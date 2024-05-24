const idade = prompt("informe a sua idade")
if(idade >= 18){
  alert("Você é maior de idade")
} else if(idade > 12){
  alert("Você é menor de idade")
} else if(idade > 4){
  alert("Você é criança")
} else{
  alert("...")
}

const resultado = (6 === 6) ? "Verdadeiro" : "False" // forma abreviada para criar estruturas condicionais.
console.log(resultado)