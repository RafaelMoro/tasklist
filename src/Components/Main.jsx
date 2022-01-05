import React from 'react'
import TaskSearcher from './TaskSearcher'
import TaskList from './TaskList'
import AddTask from './AddTask'
import '../css/Main.css'
import { Context } from '../hooks/TaskContext'

function Main() {
    //Modal code
    const [toggleModal, setToggleModal] = React.useState(false)

    React.useEffect(() => {
        if(toggleModal) {
            document.body.classList.add('fix-body')
        }else {
            document.body.classList.remove('fix-body')
        }
    }, [toggleModal])

    //Getting states from TaskContext
    const { filteredTasks, tasks } = React.useContext(Context)

    //Completed Tasks text code
    const totalTasks = tasks.length
    const completedTasks = tasks.filter((task) => task.completed === true)
    const numberOfCompletedTasks = completedTasks.length

    return(
        <main className='main'>
            { toggleModal && <AddTask setToggleModal={setToggleModal} /> }
            <h1 className='title'>Lista de tareas.</h1>
            <p className='description'>Haz completado {numberOfCompletedTasks} de {totalTasks} tareas.</p>
            <TaskSearcher />
            <TaskList filteredTasks={filteredTasks} />
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