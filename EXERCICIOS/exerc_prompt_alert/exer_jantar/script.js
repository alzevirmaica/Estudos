/*
Elabore um programa que leia o valor de um jantar
Calcule e informe o valor da taxa do garçom(10%)
e o valor a ser pago
*/

const valorJanta = Number(prompt("Digite o valor do Jantar R$:"))
const taxaGarcom = (valorJanta * 10) / 100
const valorTotal = valorJanta + taxaGarcom
alert(`Valor da janta R$: ${valorJanta.toFixed(2)}\n Taxa do Garçom R$: ${taxaGarcom.toFixed(2)} 8080\n Total a pagar R$: ${valorTotal.toFixed(2)}`)