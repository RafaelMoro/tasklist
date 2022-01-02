import React from 'react'
import BuscadorTarea from './BuscadorTarea'
import ListaTareas from './ListaTareas'
import AñadirTarea from './AñadirTarea'
import '../css/Main.css'

function Main() {
    const [toggleModal, setToggleModal] = React.useState(false)
    return(
        <main className='main'>
            {toggleModal && <AñadirTarea />}
            <h1 className='title'>Tasklists</h1>
            <p className='description'>Haz completado 5 tareas de 10</p>
            <BuscadorTarea />
            <ListaTareas />
            <button type='button' className='Add-Button' onClick={() => setToggleModal(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1" stroke="#6f32be" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                </svg>
            </button>
        </main>
    )
}

export default Main