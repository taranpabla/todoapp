import React from 'react';
//Import other components 
import Todo from './Todo';

const Todolist = ({todos, setTodos})=> {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo 
                        setTodos = {setTodos} 
                        todos = {todos} 
                        key={todo.id} 
                        text={todo.text} 
                        id={todo.id}
                        todo={todo}
                    />
                ))}    
            </ul>
        </div>
    );
};

export default Todolist;