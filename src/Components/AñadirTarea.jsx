import React from 'react'
import '../css/AñadirTarea.css'

function AñadirTarea({ setToggleModal }) {
    return(
        <div className='modal'>
            <div className='add-task__container'>
                <div className='description__container'>
                    <input type='text' className='add-task__description' placeholder='Escribe tu tarea' />
                </div>
                <div className='buttons__container'>
                    <button className='add-task__cancel' onClick={() => setToggleModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    <button className='add-task__add'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AñadirTarea