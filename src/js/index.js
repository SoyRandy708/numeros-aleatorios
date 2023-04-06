const botonResultado = document.getElementById("enviar")
const numerosValidacion = document.getElementsByName("numeros-validacion")

function validacion() {
    const repetirNumeros = document.getElementById("numeros-repetidos")
    let resultados = parseInt(document.getElementById("numero-resultados").value) || 0

    if(resultados === 0) {
        document.querySelector(".container-numeros-repetidos").classList.add("desactivado")
        botonResultado.disabled = true

    } else if(resultados === 1) {
        document.querySelector(".container-numeros-repetidos").classList.add("desactivado")
        botonResultado.disabled = false
        botonResultado.onclick = () => numerosAleatorio(resultados)

    } else if(resultados > 1 && repetirNumeros.checked) {
        document.querySelector(".container-numeros-repetidos").classList.remove("desactivado")
        botonResultado.disabled = false
        botonResultado.onclick = () => numerosAleatorio(resultados)

    } else if(resultados > 1) {
        document.querySelector(".container-numeros-repetidos").classList.remove("desactivado")
        botonResultado.disabled = false
        botonResultado.onclick = () => numerosNoRepetidos(resultados)

    }
}

const numerosNoRepetidos = (ejecuciones) => {
    let minimo = parseInt(document.getElementById("numero-menor").value) || 0
    let maximo = parseInt(document.getElementById("numero-mayor").value) || 0
    let numeros = []

    if((maximo - minimo + 1) >= ejecuciones) {
        botonResultado.disabled = false

        for (let index = 0; index < ejecuciones; index++) {
            let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
    
            if(!numeros.includes(numeroAleatorio)) {
                numeros.push(numeroAleatorio)
            } else {
                index--
            }
        }

        respuesta.innerText = `Numeros: ${numeros.join(", ")}`
    } else {
        console.log("El rango de numeros tiene que ser mayor al numero de resultados")
        botonResultado.disabled = true
    }
}

function numerosAleatorio(ejecuciones) {
    let minimo = parseInt(document.getElementById("numero-menor").value) || 0
    let maximo = parseInt(document.getElementById("numero-mayor").value) || 0
    let numeros = []
    
    for (let index = 0; index < ejecuciones; index++) {
        let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
        numeros.push(numeroAleatorio)
    }
    respuesta.innerText = `Numeros: ${numeros.join(", ")}`
}

numerosValidacion.forEach((input) => {
    input.addEventListener('input', validacion)
})
