import React from 'react'
import Tarea from './Tarea'
import '../css/ListaTareas.css'

function ListaTareas({tareas}) {
    return(
        <section className='lista_tareas'>
            {tareas.map( (tarea) => (
                <Tarea key={tarea.id} tarea={tarea.nombre} completed={tarea.completed} />
                    )
                )
            }
        </section>
    )
}

export default ListaTareas