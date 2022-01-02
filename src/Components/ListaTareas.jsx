import React from 'react'
import Tarea from './Tarea'
import '../css/ListaTareas.css'

function ListaTareas() {
    return(
        <section className='lista_tareas'>
            <Tarea tarea="Hacer el quehacer" />
            <Tarea tarea="Terminar serie de Netflix"  />
            <Tarea tarea="Estudiar"  />
            <Tarea tarea="Lavar platos"  />
        </section>
    )
}

export default ListaTareas