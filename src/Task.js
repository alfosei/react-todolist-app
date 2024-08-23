import React from 'react'

const Task = (props) => {
  return (
    <div className='todoList'>
        <div 
          className='todo' 
          style= {{textDecoration: props.completed ? 'line-through' : 'none' }}
        >
            <h1>
            {props.taskName}
            </h1>
        
            <div className='actionsContainer'>
                <button onClick={() => props.deleteTask(props.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>

                <button onClick={() => props.completeTask(props.id)}>
                    <i className="fa-solid fa-square-check"></i>
                </button>

            </div>
        </div>
    </div>
  )
}

export default Task