let velocidade = 0

do {
  alert(`A velocidade do veiculo é ${velocidade} km/h`)
  velocidade -= 20
} while (velocidade > 0)

alert(`velocidade final: ${velocidade} km/h`)