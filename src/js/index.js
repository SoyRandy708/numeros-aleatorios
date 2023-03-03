const respuesta = document.getElementById("respuesta")
const enviar = document.getElementById("enviar")

enviar.addEventListener("click", numerosAleatorio)

function numerosAleatorio() {
    let minimo = parseInt(document.getElementById("numero-menor").value) || 0
    let maximo = parseInt(document.getElementById("numero-mayor").value) || 0
    let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo

    respuesta.innerText = `Numeros: ${numeroAleatorio}`
}
