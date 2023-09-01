/*
Elaborar um programa para uma revenda de veículos.
O programa deve ler modelo e preço do veículo.
Apresentar como resposta o valor da entrada(50%) e o saldo em 12x. */

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)
    
    const entrada = preco - (preco * 50 / 100)
    const parcela = (preco - entrada ) / 12

    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+ 12x de R$: ${parcela.toFixed(2)}`

})


