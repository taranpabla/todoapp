import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value); //.target.value gets the input from the input text box
    setInputText(e.target.value); //update state with input text
  };

  const submitTodoHandler = (e) => {
    e.preventDefault(); // prevents default behavior; stops page from being refreshed when buttom is clicked
    setTodos([ //Create object with text, bool for completed and uniqueID
      ...todos, 
      {text: inputText, completed: false, id: Math.random() * 1000},
    ]);
    setInputText(""); // Clear out input text box
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return(
        <form>
        <input 
          value={inputText} 
          onChange = {inputTextHandler} 
          type="text" 
          className="todo-input" 
        />
        <button onClick = {submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange = {statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form> 
    );
}

export default Form;