alert("veja se a sua palavra é um palindromo")
const palavra = prompt("Insira a sua palavra:")
let inverso = ""

for (let i = palavra.length - 1; i >= 0; i--) {
inverso += palavra[i]
  
}
if(palavra === inverso){
  alert(`${palavra} é um palindromo`)
} else{alert(`${palavra} não é um palindromo \n ${palavra} != ${inverso}`)}