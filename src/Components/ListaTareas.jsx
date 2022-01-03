import React from 'react'
import Tarea from './Tarea'
import '../css/ListaTareas.css'

function ListaTareas() {
    return(
        <section className='lista_tareas'>
            <Tarea tarea="Hacer el quehacer" completed={false} />
            <Tarea tarea="Terminar serie de Netflix" completed={true} />
            <Tarea tarea="Estudiar" completed={false}  />
            <Tarea tarea="Lavar platos" completed={false}  />
            <Tarea tarea="Terminar serie de Netflix" completed={false} />
            <Tarea tarea="Estudiar para mi examen de programacion funcional de SAP" completed={true} />
            <Tarea tarea="Lavar platos" completed={false} />
        </section>
    )
}

export default ListaTareas