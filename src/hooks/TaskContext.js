import React from 'react'

const Context = React.createContext()

function TaskContext(props) {
    const [tasks, setTasks] = React.useState([])
    const test = 1
    const tasklist = JSON.parse(localStorage.getItem('TASKLIST_V1'))

    if(tasks.length < 1) {
        setTasks(tasklist)
    }
    return (
        <Context.Provider value={{
            tasks,
            test
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, TaskContext}