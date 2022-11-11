 /*
 Elaborar um programa para um cinema, que leia o título
 e a duração de um filme em minutos. exiba o título do filme
 e converta a duração para horas, minutos
 */
 
 
 const frm = document.querySelector ("form")
 const resp1 = document.querySelector("h3")
 const resp2 = document.querySelector("h4")

 frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const titulo = frm.inTitulo.value
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) //duração em horas
    const minutos = duracao % 60 //obtém o resto da divisão

    resp1.innerText = `Título: ${titulo}`
    resp2.innerText = `${horas} horas(s) e ${minutos}   minutos(s)`

 })