import React from 'react'

const Context = React.createContext()

function TaskContext(props) {
    const [tasks, setTasks] = React.useState([])
    const tasklist = JSON.parse(localStorage.getItem('TASKLIST_V1'))

    if(tasks.length < 1) {
        setTasks(tasklist)
    }
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