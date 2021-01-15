import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ inputText, setInputText , todos , setTodos}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(inputText){
            setTodos([
                ...todos, {text: inputText , completed: false ,  id: uuidv4()}
            ])
            setInputText("")
            alert("Todo List Added");
         }else{
            alert("Description can not be empty!")
         }

    }
    return (
        <div className="form">Add new todo's
            <form>
                <input onChange={inputTextHandler} type="text" value={inputText} required />
                <input type="submit" value="Add" onClick={submitTodoHandler}/>
            </form>

        </div>
    )
}

export default Form;