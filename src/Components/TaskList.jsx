import React from 'react'
import Task from './Task'
import '../css/TaskList.css'

function TaskList({filteredTasks}) {
    return(
        <section className='tasklist'>
            {filteredTasks.map( (task) => (
                <Task key={task.id} task={task.text} completed={task.completed} id={task.id} />
                    )
                )
            }
        </section>
    )
}

export default TaskList