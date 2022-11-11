/*
Elaborar um programa para uma pizzaria, o qual
leia o valor total de uma conta e quantos clientes vão paga-lá. Calcule e informe o valor a ser pago por cliente
*/

const valorConta = Number(prompt("Valor da conta R$: "))
const numClientes = Number(prompt("Número de clientes: "))
const valorPorClientes = valorConta / numClientes

alert(`Valor da conta R$: ${valorConta.toFixed(2)}\n Números de clientes: ${numClientes}\n Valor por cliente R$: ${valorPorClientes.toFixed(2)}`)