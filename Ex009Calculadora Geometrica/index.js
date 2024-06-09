let pergunta = ""

do {
  
  pergunta = prompt("Qual area você deseja calcular?\n 1 - área do triângulo\n 2 - área do retângulo\n 3 - área do quadrado\n 4 - área do trapezio\n 5 - área  do círculo\n 6 - Sair")

  switch (pergunta) {
    case "1":
      const xibiu = 0
      function areaTriangulo(base, altura, total ) {
        base = parseFloat(prompt("Insira o tamanho da base:")) 
        altura = parseFloat(prompt("Insira o tamanho da altura:"))
        total =  base * altura / 2  
        return total
      }
      alert(`O valor total  da area do triangulo é de: ${areaTriangulo()}`)
      break;

      case "2":
        function areaRetangulo(base, altura) {
        base = parseFloat(prompt("Insira o tamanho da base:"))
        altura = parseFloat(prompt("Insira o tamanho da altura:"))
        return base * altura
        }
        alert(`O valor total da area do retangulo é de:\n ${areaRetangulo()}`)     
      break;

      case "3":
        function areaQuadrado(lado){
        lado = parseFloat(prompt("Insira o valor do lado do quadrado:"))
        return lado ** 2
        }
        alert(`A area do quadrado é equivalente a: ${areaQuadrado()}`)
      break;

      case "4":
        function areaTrapezio(maior, menor, altura){
        maior = parseFloat(prompt("Insira a base maior do trapezio"))
        menor = parseFloat(prompt("Insira a base menor do trapezio"))
        altura = parseFloat(prompt("Insira a altura do trapezio"))
        
        return (menor + maior) * altura / 2
        }
        alert(`A area do trapezio é equivalente a: ${areaTrapezio()}`)
        break;

      case "5":
      function areaCirculo(pi, raio){
       pi = 3.14
       raio = parseFloat(prompt("Insira o valor do raio do circulo:"))
       return pi * Math.pow(raio, 2) //<- retorna a base elevada ao expoente
      }
       alert(`O valor do raio do circulo é igual a: ${areaCirculo()}`)
       break;

      case "6":
       alert("Obrigado por ultilizar este programa pifio!")
       break;
  
    default:
      alert("Opção invalida!")
      break;
  } 
} while (pergunta !== "6");