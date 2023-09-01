/*
Elaborar um programa que que leia duas notas de um aluno
e apresente a média e uma mensagem para o aluno:
-parabéns vocÊ foi aprovado(a)
ou
-OPS, você foi reprovado!
 Media = 7,0
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    const soma = nota1 + nota2
    const media = soma / 2

    if (media >= 7) {
        resp1.innerText = `Sua Média foi de ${media.toFixed(2)}, Parabéns você está APROVADO!`
    } else {
        resp2.innerText = `Sua Média foi de ${media.toFixed(2)}, Ops! Você foi REPROVADO!`
    }
    resp1.style.color = "white"
    resp2.style.color = "white"
    resp1.style.fontSize = "1.3rem"
    resp2.style.fontSize = "1.3rem"
})