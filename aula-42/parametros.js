function dobro(x) {
alert(`O dobro de ${x} é igual a ${x * 2}`)
}


//dobro(5)
//dobro(7)

//dobro()

function dizerOla(nome = "Mundo" /* <-é possivel definir um valor padrao como mostrado */ ){
alert(`Ola ${nome} !`)
}

//dizerOla("Natan")
//dizerOla()

function soma(a, b, c, d, e /*É possivel também adicionar multiplos parametros na função */){
alert(`Resultado da soma é ${a + b}`)
}

//soma(18, 18)

function criarUsuario(nome, email, senha, tipo = "adm"){

}

function novoUsuario(nome, tipo = "adm", email, senha){ // é importante colocar os valores padroes no final
  const usuario = {
    nome, //<- é possivel abreviar objetos com a mesma chave e valor
    email,
    senha,
    tipo:tipo,
    }
    console.log(usuario)
}

function muitosParametros(nome, telefone, endereço, aniversario, email, senha) {
  //...
}
muitosParametros()

function objetoComoParametros(usuario) {
  usuario.nome
  usuario.email
}

const dadoDoUsuario ={
  nome:"",
  telefone:"",
  email:"",
  //etc...
}
objetoComoParametros(dadoDoUsuario)
