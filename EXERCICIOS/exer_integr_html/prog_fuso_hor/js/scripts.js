// Sabendo que o fuso horário da frança em relação ao brasil é de + 5horas (no horário de verão na frança), elaborar um programa que leia a hora no brasil e informe  a hora na frança.

// Seleção de elementos
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// eventos
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const hora = Number(frm.inHoraBrasil.value)
    let horaFranca = hora + 5 // calcula hora na frança

    if(horaFranca > 24) {
        horaFranca = horaFranca - 24
    }
    resp.innerText = `Hora da frança ${horaFranca.toFixed(2)}h`
    resp.style.fontSize = "1.7rem"
})