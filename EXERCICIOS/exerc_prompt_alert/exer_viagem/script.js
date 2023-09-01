/*
Elaborar um programa que leia a duração de uma viagem em dias e horas. Calcule e informe a duração total da viagem em números de horas.
*/
 const dias = Number(prompt("Dias: "))
 const horas = Number(prompt("horas: "))
 const totalHoras = dias * 24 + horas
 alert(`Nº dias: ${dias}\n Nº horas: ${horas}\n Nº total de horas: ${totalHoras}`)