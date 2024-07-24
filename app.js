const formulario = document.getElementById('formulario')
const lista = document.getElementById('lista')
const inputTarea = document.querySelector('input')



function añadirTarea(ev) {
    //evitamos el comportamiento por defecto
    ev.preventDefault()
    console.log('añadiendo tarea')

    //creamos un nodo <li></li> y metemos el contenido del input dentro del li
    const nuevaTarea = document.createElement('li')
    nuevaTarea.innerText = inputTarea.value

    //metemos el li dentro de la lista
    lista.append(nuevaTarea)

    //borramos lo que se haya escrito en el formulario
    formulario.reset()
    formulario.focus()

}



formulario.onsubmit = añadirTarea