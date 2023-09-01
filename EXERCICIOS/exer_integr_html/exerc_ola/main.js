/*Elaborar um programa que leia o nome de uma pessoa e exiba um mensagem de boas vindas. */

//Cria refêrencia ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Cria um ouvinte de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita envio e formulário

    const nome = frm.inNome.value //obtém valores do input
    resp.innerText = `Olá, ${nome}!`
    resp.style.color = "blue"
    
    

})