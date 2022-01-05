import React from 'react'
import '../css/AñadirTarea.css'
import {Context} from '../hooks/TaskContext'

function AñadirTarea({ setToggleModal }) {
    const {tasks, setTasks, setFilteredTasks} = React.useContext(Context)
    const [information, setInformation] = React.useState('')

    //This function updates our "information" state based on the user´s input
    const getInfoInput = (event) => {
        setInformation(event.target.value)
    }
    //This function adds the new Task to our Tasks updating state and localStorage item.
    const addTask = () => {
        //Generate the new id
        const tasksLength = tasks.length
        const newId = tasksLength + 1
        //Create the new object
        const newTask = {id: newId, nombre: information, completed: false}
        //Get a copy of the "tasks" state
        const newTasklist = [...tasks]
        //Add the new object to the array
        newTasklist.push(newTask)
        //Update our "tasks" state
        setTasks(newTasklist)
        //Updating our filteredTasks state
        setFilteredTasks(newTasklist)
        //Persist changes on local Storage
        localStorage.setItem('TASKLIST_V1', JSON.stringify(newTasklist))

        //Close Modal
        setToggleModal(false)
    }
    return(
        <div className='modal'>
            <div className='add-task__container'>
                <div className='description__container'>
                    <input type='text' className='add-task__description' placeholder='Escribe tu tarea' onChange={getInfoInput}/>
                </div>
                <div className='buttons__container'>
                    <button type='button' className='add-task__cancel' onClick={() => setToggleModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    <button type='button' className='add-task__add' onClick={addTask}>
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