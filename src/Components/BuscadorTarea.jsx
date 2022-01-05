import React from 'react'
import '../css/BuscadorTarea.css'
import {Context} from '../hooks/TaskContext'

function BuscadorTarea() {
    const {tasks, setFilteredTasks} = React.useContext(Context)
    const filterTasks = (event) => {
        //Obtain the searched value from the input and transform it to lowercase
        const searchedValue = (event.target.value).toLowerCase()

        //If the input is empty, then the tasks filtered has the same values as the all the tasks
        if(searchedValue.length < 1) {
            setFilteredTasks(tasks)
        } else {
            //If the searched value has any character, then filter the tasks
            const result = tasks.filter((task) => {
                const searchedTask = task.nombre.toLowerCase()
                return searchedTask.includes(searchedValue)
            })
            setFilteredTasks(result)
        }

    }
    return(
        <input className='buscador' type='text' placeholder='Buscar tarea...' onChange={filterTasks} />
    )
}

export default BuscadorTarea