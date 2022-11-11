/*
Elaborar um programa para um restaurante que leia o preço por kg e o consumo
(em gramas) de um cliente. Exiba o valor a ser pago.
*/
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valorQuilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)

    const valorTotal = (valorQuilo * consumo) / 1000
    resp.innerText = `Valor a pagar R$: ${valorTotal.toFixed(2)}`
    resp.style.margin = "50px"
})


