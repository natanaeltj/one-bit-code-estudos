let medida = parseFloat(prompt("Insira um valor em metros para  ser convertido \n(peço que ultilize . para representar numeros decimais)"))

const convercao = prompt("para qual unidade de medida sera convertida este numero \n-milimetro(mm) \n-centimetro(cm) \n-decimetro(dm) \n-decametro(dam) \n-hectometro(hm) \n-quilometro(km) ")




switch(convercao){

case "milimetro":
  medida = medida * 1000
  alert(`SUA CONVERSÃO FOI REALIZAR O VALOR É DE: \n${medida}Mm`)
  break
  case "centimetro":
  medida = medida * 100
  alert(`SUA CONVERSÃO FOI REALIZAR O VALOR É DE: \n${medida}Cm`)
  break
  case "decimetro":
  medida = medida * 10
  alert(`SUA CONVERSÃO FOI REALIZAR O VALOR É DE: \n${medida}Dm`)
  break
  case "decametro":
  medida = medida / 10
  alert(`SUA CONVERSÃO FOI REALIZAR O VALOR É DE: \n${medida}Dam`)
  break
  case "hectometro":
 medida = medida / 100
 alert(`SUA CONVERSÃO FOI REALIZAR O VALOR É DE: \n${medida}Hm`)
 break
  case "quilometro":
  medida = medida / 1000
  alert(`SUA CONVERSÃO FOI REALIZAR O VALOR É DE: \n${medida}Km`)
  break

  default:
    alert("Opção invalida")
}


