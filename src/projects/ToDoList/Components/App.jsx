// #todo: rename this file to TodoListApp.jsx

import './CSS/App.css';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import TodoItems from './TodoItems';

let count = 0;

// #todo: rename this component to TodoListApp
const TodoListApp = () => {
  // State to store the list of todo items
  const [todos, setTodos] = useState([]);

  // Reference for the input field to get the value without using state
  // #! (Add 'ref={inputRef}' to input field!):
  const inputRef = useRef(null);

  // Add a new todo item to the list
  // #! (add 'onClick=...' to .todo-add-btn!)
  const add = () => {
    // Update the todos state with a new todo item
    setTodos([...todos, { no: count++, text: inputRef.current.value, display: '' }]);

    // Clear the input field
    inputRef.current.value = '';

    // Store the value of the updated count variable in localStorage as todos_count
    localStorage.setItem('todos_count', count);
  };

  // useEffect to load todos from localStorage when the component mounts ([])
  // when the page gets reloaded ([]), get data from localStorage and save it in useState variable (setTodos)
  useEffect(() => {
    // Retrieve and parse todos from localStorage and set the todos-state to the parsed array
    setTodos(JSON.parse(localStorage.getItem('todos')));

    // Retrieve todos_count from localStorage
    count = localStorage.getItem('todos_count');
  }, []);

  // Update the localStorage with the latest todos state whenever the [todos] state changes:
  useEffect(() => {
    // to run useEffect after React has completed its updates, use timeout:
    setTimeout(() => {
      console.log(todos);
      //  Store the todos state in localStorage:
      localStorage.setItem('todos', JSON.stringify(todos));
    }, 100);
  }, [todos]);

  // #HL define the structure and content of the component's rendered output:
  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        {/* ref={inputRef} assigns a reference to this input field, allowing the component to access its value directly. */}
        <input ref={inputRef} type="text" placeholder="Add your task" className="todo-input" />

        <div className="todo-add-btn" onClick={() => add()}>
          ADD
        </div>
      </div>
      
      <div className="todo-list">
        {/* Render the <TodoItems> components */}
        {todos.map((item, index) => {
          return <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default TodoListApp;
