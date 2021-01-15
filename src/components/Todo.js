import React from 'react';

const Todo = ({text ,todo , todos , setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completehandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item , completed: !item.completed
                }
            }
            return item
        }))
    }
    return (
        <div className="todo">
            <li className={`${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completehandler} className="button-complete">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="button-delete">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;