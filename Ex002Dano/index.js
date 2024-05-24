const perso1 = prompt("Jogador 01 insira o nome do seu personagem:")

const poder = prompt("insira o nome do seu poder:")

const atk = parseFloat(prompt("Insira o seu poder de ataque:"))


const perso2 = prompt("Agora jogador 02 insira o nome do seu personagem:")

let vida = parseFloat(prompt("Insira a sua vida:"))

const def = parseFloat(prompt("Insira a sua defesa:"))

const escu = confirm("Você detém um escudo?")

let dano = 0


if(atk > def && escu == false){
 dano = (atk - def)
vida = dano - vida
  alert(`O personagem ${perso1} atacou com ${poder} o ${perso2} e levou ${dano} de dano e ficou com ${vida} de vida.`)
} else if(atk > def && escu == true){
   dano = (atk - def) / 2
   vida = dano - vida
  alert(`O personagem ${perso1} atacou com ${poder} o ${perso2} e levou ${dano} de dano com escudo, e ficou com ${vida} de vida.`)
}else if(atk <= def){
  alert (`O personagem defensor ${perso2} tomou 0 de dano :(`)  
}





