// 3 -prompt e alert

/*const nome = prompt("Digite o seu nome : ")
const idade =prompt ("Digite sua idade: ")
alert(`Olá ${nome}! você tem ${idade} anos.`)
*/

// 5 - Math

//console.log(Math.max(3, 4, 6, 8))

//console.log(Math.floor(5.14))

//console.log(Math.ceil(5.14))

// 6 - console
//console.error("erro!")
//console.warn("Aviso!")

// if / else if / else
const nota1 = Number(prompt("Digite sua primeira nota: "))
const nota2 = Number(prompt("Digite sua segunda nota: "))
const nota3 = Number(prompt("Digite sua terceira nota: "))

const soma = nota1 + nota2 + nota3
const media = soma / 3

if(media >= 7) {
    alert(`Sua media foi ${media.toFixed(2)}, situação: Aprovado!`)

}else if(media >= 5) {
    alert(`sua media foi ${media.toFixed(2)}, situação: Recuperação`)

}else {
    alert("Você está reprovado!")
}
 