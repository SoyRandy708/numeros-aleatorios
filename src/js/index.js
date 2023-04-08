const botonResultado = document.getElementById("enviar")
const numerosRepetidos = document.getElementById("numeros-repetidos")
const numerosValidacion = document.getElementsByName("numeros-validacion")

const activarBoton = () => {
    let resultados = parseInt(document.getElementById("numero-resultados").value) || 0
    
    if(resultados < 1) {
        document.querySelector(".container-numeros-repetidos").classList.add("desactivado")
        botonResultado.disabled = true
        // MOSTRAR MENSAJE DE ERROR
        
    } else if(resultados === 1) {
        document.querySelector(".container-numeros-repetidos").classList.add("desactivado")
        botonResultado.disabled = false

    } else if(resultados > 1) {
        document.querySelector(".container-numeros-repetidos").classList.remove("desactivado")
        botonResultado.disabled = false

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

    if((maximo - minimo + 1) < ejecuciones) {
        console.log("El rango de numeros tiene que ser mayor al numero de resultados")
        botonResultado.disabled = true
        return
        // MENSAJE DE ERROR 
    } else if((maximo - minimo + 1) >= ejecuciones) {
        botonResultado.disabled = false
    }
    
    for (let index = 0; index < ejecuciones; index++) {
        let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo

        if(!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio)
        } else {
            index--
        }
    }

    respuesta.innerText = `Numeros: ${numeros.join(", ")}`
}

const aleatoriosRepetidos = (ejecuciones) => {
    let minimo = parseInt(document.getElementById("numero-menor").value) || 0
    let maximo = parseInt(document.getElementById("numero-mayor").value) || 0
    let numeros = []
    
    botonResultado.disabled = false
    for (let index = 0; index < ejecuciones; index++) {
        let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
        numeros.push(numeroAleatorio)
    }
    respuesta.innerText = `Numeros: ${numeros.join(", ")}`
}

numerosValidacion.forEach((input) => {
    input.addEventListener('input', activarBoton)
})

botonResultado.addEventListener("click", elegirNumeros)