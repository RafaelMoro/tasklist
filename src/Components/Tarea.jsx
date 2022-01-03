import React from 'react'
import '../css/Tarea.css'

function Tarea({ tarea, completed }) {
    return(
        <div className='tarea'>
            <span className='tarea__completar'>
                <svg xmlns="http://www.w3.org/2000/svg" className={!completed ? 'icon icon-tabler icon-tabler-check' : 'icon icon-tabler icon-tabler-check completed__tick'} width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6f32be" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 12l5 5l10 -10" />
                </svg>
            </span>
            <p className={!completed ? 'tarea__descripcion' : 'tarea__descripcion completed__text'}>{tarea}</p>
            <button type='button' className='tarea__borrar'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6f32be" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
            </button>
        </div>
    )
}

export default Tarea