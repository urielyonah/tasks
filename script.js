let guardados = []

function guardar(){
    let nombre = document.querySelector(".nombre").value
    let idioma = document.querySelector(".idioma").value
    let descripcion = document.querySelector(".descripcion").value

    if(guardados.some(
            guardado => guardado.nombre === nombre && guardado.idioma === idioma))
        {
            alert("Ya existe un registro previamente guardado del mismo nombre con el mismo idioma")
            return false
        }

    guardados.push({nombre, idioma, descripcion})
    document.querySelector(".nombre").value = ""
    document.querySelector(".idioma").value = ""
    document.querySelector(".descripcion").value = ""
    mostrar()
    return false
}

function mostrar(){
    let tabla = document.querySelector(".tabla")
    let filas = tabla.querySelectorAll("tr")

    filas.forEach((fila, index) => {
        if (index !== 0) fila.remove()
    })

    guardados.forEach(guardado => {
        let fila = tabla.insertRow()
        fila.insertCell(0).textContent = guardado.nombre
        fila.insertCell(1).textContent = guardado.idioma
        fila.insertCell(2).textContent = guardado.descripcion
    })

}