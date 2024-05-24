const carro1 = prompt("Diga o modelo do primeiro carro:")

const velo1 = parseFloat(prompt("Diga a velocidade do primeiro carro:"))

const carro2 = prompt("Diga o modelo do segundo carro:")

const velo2 = parseFloat(prompt("Diga a velocidade do segundo carro:"))

const res = velo1 - velo2

if (velo1 > velo2){
  alert(`O ${carro1} atinge cerca de ${velo1}km/h sendo mais rapido do que o ${carro2} com ${velo2}km/h, tendo uma diferença de ${res}km/h sendo o ganhador!`)
}else if(velo2 < velo1){
  alert(`O ${carro2} atinge cerca de ${velo2}km/h sendo mais rapido do que o ${carro1} com ${velo1}km/h, tendo uma diferença de ${res}km/h sendo o ganhador!`)
} else{
  alert(`Os dois carros contém a mesma velocidade. Não há ganhadores!`)
}