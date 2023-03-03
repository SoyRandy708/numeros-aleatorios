const respuesta = document.getElementById("respuesta")
const enviar = document.getElementById("enviar")

function cantidadNumeros() {
    let resultados = parseInt(document.getElementById("numero-resultados").value) || 0

    if(resultados <= 0) {
        console.log("Debes generar al menos 1 resultado")
    } else {
        numerosAleatorio(resultados)
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

enviar.addEventListener("click", cantidadNumeros)