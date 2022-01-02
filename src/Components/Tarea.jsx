import React from 'react'
import '../css/Tarea.css'

function Tarea({ tarea }) {
    return(
        <div className='tarea'>
            <p className='tarea__descripcion'>{tarea}</p>
            <p className='tarea__completar'>Palomear</p>
            <button type='button' className='tarea__borrar'>Borrar</button>
        </div>
    )
}

export default Tarea