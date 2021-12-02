import React from 'react'
import "../App.css"

const  Todo = (props) => {
    return (
        <div className="todo-div">
            <div className="task" onClick={() => props.editTaskfunc(props.id, props.task)}>
                <p className="task-text">{props.task}</p>
            </div>
            <button className="delete-btn" onClick={() => props.deleteTask()}>X</button>
        </div>
    )
}

export default Todo;
