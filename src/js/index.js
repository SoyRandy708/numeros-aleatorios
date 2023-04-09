const botonResultado = document.getElementById("enviar")
const numerosRepetidos = document.getElementById("numeros-repetidos")
const numerosValidacion = document.querySelectorAll(".numeros-validacion")

const activarBoton = () => {
    let resultados = parseInt(document.getElementById("numero-resultados").value) || 0
    
    if(resultados < 1) {
        document.querySelector(".numero-resultados-container p").textContent = "El numero minimo de resultados debe ser 1."
        document.querySelector(".container-numeros-repetidos").classList.add("desactivado")
        document.querySelector(".numero-resultados-container p").classList.remove("desactivado")
        document.querySelector(".numero-menor-container p").classList.add("desactivado")
        document.querySelector(".numero-mayor-container p").classList.add("desactivado")
        botonResultado.disabled = true

    } else if(resultados === 1) {
        document.querySelector(".container-numeros-repetidos").classList.add("desactivado")
        document.querySelector(".numero-resultados-container p").classList.add("desactivado")
        document.querySelector(".numero-menor-container p").classList.add("desactivado")
        document.querySelector(".numero-mayor-container p").classList.add("desactivado")
        botonResultado.disabled = false

    } else if(resultados > 1 && numerosRepetidos.checked) {
        document.querySelector(".container-numeros-repetidos").classList.remove("desactivado")
        document.querySelector(".numero-resultados-container p").classList.add("desactivado")
        document.querySelector(".numero-menor-container p").classList.add("desactivado")
        document.querySelector(".numero-mayor-container p").classList.add("desactivado")
        botonResultado.disabled = false

    }  else if(resultados > 1) {
        document.querySelector(".container-numeros-repetidos").classList.remove("desactivado")
        document.querySelector(".numero-resultados-container p").classList.add("desactivado")
        document.querySelector(".numero-menor-container p").classList.add("desactivado")
        document.querySelector(".numero-mayor-container p").classList.add("desactivado")
        botonResultado.disabled = false
        validacionNoRepetidos(resultados)
    } 
}

const validacionNoRepetidos = (ejecuciones) => {
    let minimo = parseInt(document.getElementById("numero-menor").value) || 0
    let maximo = parseInt(document.getElementById("numero-mayor").value) || 0
    
    if((maximo - minimo + 1) >= ejecuciones) {
        botonResultado.disabled = false
        document.querySelector(".numero-menor-container p").classList.add("desactivado")
        document.querySelector(".numero-mayor-container p").classList.add("desactivado")
        document.querySelector(".numero-resultados-container p").classList.add("desactivado")
        
    } else {
        botonResultado.disabled = true
        document.querySelector(".numero-resultados-container p").textContent = "El rango de numeros tiene que ser mayor al numero de resultados."
        document.querySelector(".numero-resultados-container p").classList.remove("desactivado")
        document.querySelector(".numero-menor-container p").textContent = "El rango de numeros tiene que ser mayor al numero de resultados."
        document.querySelector(".numero-menor-container p").classList.remove("desactivado")
        document.querySelector(".numero-mayor-container p").textContent = "El rango de numeros tiene que ser mayor al numero de resultados."
        document.querySelector(".numero-mayor-container p").classList.remove("desactivado")

    }
}

const elegirNumeros = () => {
    let resultados = parseInt(document.getElementById("numero-resultados").value) || 0

    if(numerosRepetidos.checked) {
        aleatoriosRepetidos(resultados)
    } else {
        aleatoriosNoRepetidos(resultados)
    }
}

const aleatoriosNoRepetidos = (ejecuciones) => {
    let minimo = parseInt(document.getElementById("numero-menor").value) || 0
    let maximo = parseInt(document.getElementById("numero-mayor").value) || 0
    let numeros = []
    
    for (let index = 0; index < ejecuciones; index++) {
        let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo

        if(!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio)
        } else {
            index--
        }
    }

    respuesta.textContent = `Numeros: ${numeros.join(", ")}`
}

const aleatoriosRepetidos = (ejecuciones) => {
    let minimo = parseInt(document.getElementById("numero-menor").value) || 0
    let maximo = parseInt(document.getElementById("numero-mayor").value) || 0
    let numeros = []
    
    for (let index = 0; index < ejecuciones; index++) {
        let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
        numeros.push(numeroAleatorio)
    }

    respuesta.textContent = `Numeros: ${numeros.join(", ")}`
}

numerosValidacion.forEach((input) => {
    input.addEventListener('input', activarBoton)
    input.addEventListener('blur', activarBoton)
})

numerosRepetidos.addEventListener("change", activarBoton)

botonResultado.addEventListener("click", elegirNumeros)