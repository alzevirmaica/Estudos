/*
Uma farmácia em promoção:
Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total. elaborar um programa que leia a descrição e preço de um medicamento, informe o valor do produto na promoção.
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

  const medicamento = frm.inMedicamento.value
  const preco = Number(frm.inPreco.value)
  
  const desconto = Math.floor(preco * 2)
  
  resp1.innerText = `Promoção de ${medicamento}`
  resp2.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`
  resp1.style.margin = "30px"
  resp2.style.margin = "30px"

})


