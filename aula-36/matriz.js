const arr = [
  
    "nivel 1",
    ["nivel 2", 18, true],
    [
      ["nivel 3, 1 item"],
      ["nivel 3, 2 item"]
    ],
    []
]
console.log(arr)
console.log(arr[1])
console.log(arr[1][0])

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
    // console.table(matriz)
    // matriz[0].push("teste 1")
    // console.table(matriz)
 
    for(let i = 0; i < matriz.length; i++){

      for(let j = 0; j < matriz[i].length; j++){

        const elemento = matriz[i][j]

        console.log(`posição (${ i }, ${ j }) Valor: ${elemento}`)
        
      }
      console.log(matriz[i])
    }