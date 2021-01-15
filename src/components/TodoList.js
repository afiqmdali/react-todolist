import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos , setTodos}) => {
  console.log(todos);
  return (
    <div style={{padding:'2rem'}}>
      Todos
      <div className="todo-container">
        <ul className="todolist">
          {todos.map((todo) => (
            <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo} text={todo.text} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
