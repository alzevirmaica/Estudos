/*
Um supermercado está em promoção- Para aumentar suas vendas no setor de higiene, cada etiqueta
de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades do produto. Elaborar um programa que leia descrição e preço de um produto. Após,
apresente as mensagens indicando a promoção.
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


frm.addEventListener("submit", (e) => {
    e.preventDefault()
  const produto = frm.inProduto.value
  const preco = Number(frm.inPreco.value)
  
  const descItem = preco / 2
  const promocao = (preco * 2) + descItem
  
  resp1.innerText = `${produto}- Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`
  resp2.innerText = `O 3º produto custa apenas R$: ${descItem.toFixed(2)}`
  resp1.style.margin = "30px"
  resp2.style.margin = "30px"

})


