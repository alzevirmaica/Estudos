/*
Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. calcule e informe o valor para  pagamento á vista com 10% de desconto e o valor em 3x.
*/

const preco = Number(prompt("Digite o valor R$: "))
const desconto = preco - (preco * 10 / 100)
const parcela = preco / 3

alert(`Preço R$: ${preco.toFixed(2)}\n Á vista R$: ${desconto.toFixed(2)}\n Ou em 3x de R$: ${parcela.toFixed(2)}`)