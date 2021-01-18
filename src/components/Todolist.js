import React from 'react';
//Import other components 
import Todo from './Todo';

const Todolist = ({todos})=> {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo key={todo.id} text={todo.text} id={todo.id}/>
                ))}    
            </ul>
        </div>
    );
};

export default Todolist;