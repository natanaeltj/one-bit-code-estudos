const entrada1 = prompt("insira um valor para ser somado:")
const entrada2 = prompt("insira outro valor para ser somado:")

const a = parseFloat(entrada1)
const b = parseFloat(entrada2)

const soma = a + b
const subt = a - b
const mult = a * b
const divi = a / b

alert(`Resultados:
soma:${soma} 
subtração:${subt} 
multiplicação:${mult} 
divisão:${divi}   `
)
