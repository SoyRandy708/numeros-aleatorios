const resultadosInput = document.getElementById("numero-resultados")

function cantidadNumeros() {
    let resultados = parseInt(document.getElementById("numero-resultados").value) || 0

    switch (resultados) {
        case 0:
            console.log("Debes generar al menos 1 resultado")
            document.querySelector(".container-numeros-repetidos").classList.add("desactivado")
        break
        case 1:
            mostrarResultados(resultados)
            document.querySelector(".container-numeros-repetidos").classList.add("desactivado")
        break
        default:
            mostrarResultados(resultados)
            document.querySelector(".container-numeros-repetidos").classList.remove("desactivado")
        break
    }
}

const mostrarResultados = (resultados) => {
    const respuesta = document.getElementById("respuesta")
    
    respuesta.addEventListener("click", (resultados) => {
        numerosAleatorio(resultados)
    })
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

resultadosInput.addEventListener("input", cantidadNumeros)