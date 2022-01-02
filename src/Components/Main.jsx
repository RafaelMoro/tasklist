import React from 'react'
import BuscadorTarea from './BuscadorTarea'
import ListaTareas from './ListaTareas'
import '../css/Main.css'

function Main() {
    return(
        <main className='main'>
            <h1 className='title'>Tasklists</h1>
            <p className='description'>Haz completado 5 tareas de 10</p>
            <BuscadorTarea />
            <ListaTareas />
            <button type='button' className='Add-Button'> Añadir Tarea</button>
        </main>

    )
}

export default Main