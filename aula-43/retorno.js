function calcularMedia(a, b){
const media = (a + b) / 2
return media // o return serve para trabalhar com valores fora da função
}

const resultado = calcularMedia(7, 2)

console.log(resultado)

function criarProduto(nome, preco){
  const produto = {
    nome, //nome:nome;
    preco, //preco:preco;
    estoque:1
  }
  return produto
}
const notebook = criarProduto("Notebook intel core i3 8gb ram", 2500 ) //<- seguindo o padrao de 1, 2 dos parametros eles receberam os valores representados como objeto
console.log(notebook)

function areaRetangular(base, altura){
return base * altura
}

console.log(areaRetangular(3,5))

function ola(){
let texto = "..."
return texto //não é possivel retornar mais de uma vez, o return representa que o codigo acabou
texto = "ola mundo"
console.log(texto)

}
console.log(ola())

function maiorIdade(idade){
  if(idade >= 18){
return "Maior de idade"

  } else{
    return "Menor de idade"
  }
}
console.log(maiorIdade(17))
console.log(maiorIdade(22))