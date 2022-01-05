import React from 'react'

const Context = React.createContext()

function TaskContext(props) {
    //Our state that saves our list of tasks
    const [tasks, setTasks] = React.useState([])
    //Gets the new version of the localStorage file
    const tasklist = JSON.parse(localStorage.getItem('TASKLIST_V1'))

    //If our tasks array is empty, fill it with the information from the local Storage
    if(tasks.length < 1) {
        setTasks(tasklist)
    }
    //A state for filtered tasks depending on the input search bar
    const [filteredTasks, setFilteredTasks] = React.useState([])
    
    if (filteredTasks.length < 1) {
        setFilteredTasks(tasks)
    }
    return (
        <Context.Provider value={{
            tasks,
            setTasks,
            filteredTasks,
            setFilteredTasks,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, TaskContext}