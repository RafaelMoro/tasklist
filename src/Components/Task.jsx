import React from 'react'
import '../css/Task.css'
import {Context} from '../hooks/TaskContext'

function Task({ task, completed, id }) {
    const {tasks, setTasks,setFilteredTasks} = React.useContext(Context)

    const completeTask = () => {
        //Obtengo una copia del estado
        const newTasklist = [...tasks]
        //Busco su index
        const taskIndex = newTasklist.findIndex(task => task.id === id)
        //Si esa task esta como falsa, lo cambiamos a true y viceversa
        if (newTasklist[taskIndex].completed === false) {
            newTasklist[taskIndex].completed = true
        }else {
            newTasklist[taskIndex].completed = false
        }
        //Guardamos cambios en el estado
        setTasks(newTasklist)
        //Persistimos cambios en localStorage
        localStorage.setItem('TASKLIST_V1', JSON.stringify(newTasklist))
    }
    const deleteTask = () => {
        //Create a copy of the "tasks" state
        const newTasklist = [...tasks]
        //Get Id from the task to be deleted
        const taskIndex = newTasklist.findIndex(task => task.id === id)
        //Erase that task based on its index
        newTasklist.splice(taskIndex, 1)
        setTasks(newTasklist)
        setFilteredTasks(newTasklist)
        localStorage.setItem('TASKLIST_V1', JSON.stringify(newTasklist))
        //Descartarlo del estado
        //Persistir cambios en localStorage
    }
    return(
        <div className='task'>
            <span className='complete__task' onClick={completeTask}>
                <svg xmlns="http://www.w3.org/2000/svg" className={!completed ? 'icon icon-tabler icon-tabler-check' : 'icon icon-tabler icon-tabler-check completed__tick'} width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6f32be" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 12l5 5l10 -10" />
                </svg>
            </span>
            <p className={!completed ? 'task__description' : 'task__description completed__text'}>{task}</p>
            <button type='button' className='delete__task' onClick={deleteTask}>
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

export default Task