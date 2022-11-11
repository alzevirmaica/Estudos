/*
Elaborar um programa que leia 2 notas de um aluno em uma disciplina. calcule e informe a média das notas.
*/

const nota1 = Number(prompt("Digite primeira nota: "))
const nota2 = Number(prompt("Digite sua segunda nota: "))
const media = (nota1 + nota2) / 2

alert(`1º Nota: ${nota1.toFixed(1)}\n 2ª Nota: ${nota2.toFixed(1)}\n Média: ${media.toFixed(1)}`)