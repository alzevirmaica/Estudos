//Cria referência ado form e ao elemento onde será exibida a resposta.
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Ouvinte de evento, acionado quando o botão submit for acionado.
frm.addEventListener("submit", (e) => {
    e.preventDefault()// evita envio de formulário
   
    //Captura valores do form
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    const peso = masculino ? 22 * Math.pow(altura,2): 21 * Math.pow(altura,2)
    resp.innerText = `${nome} o seu peso ideal é ${peso.toFixed(3)}Kg`

    frm.addEventListener("reset", () => {
        resp.innerText = ""
    })

})