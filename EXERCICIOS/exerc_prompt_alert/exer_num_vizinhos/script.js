/*
Elaborar um programa que leia um número. Calcule
e informe os seus vizinhos, ou seja, o número anterior e posterior.
*/

const num = Number(prompt("Digite um número: "))
const anterior = num - 1
const posterior = num + 1
alert(`Número: ${num}\n Vizinhos: ${anterior} e ${posterior}`)