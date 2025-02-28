import './CSS/TodoItems.css';
import tick from './Assets/tick.png';
import not_tick from './Assets/not_tick.png';
import cross from './Assets/cross.png';

// props from Todo.jsx: {no, display, text, setTodos}
const TodoItems = ({ no, display, text, setTodos }) => {
  
  // delete todo-item by its unique identifier (no):
  const deleteTodo = (no) => {
    // Retrieve the todos array from localStorage and parse it into a JavaScript array.
    let data = JSON.parse(localStorage.getItem('todos'));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };

  // toggle tick-icon
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === '') {
          data[i].display = 'line-through';
        } else {
          data[i].display = '';
        }
        break;
      }
    }
    setTodos(data);
  };

  return (
    <div className="todoitems">
      <div className={`todoitems-container ${display}`} onClick={() => toggle(no)}>
        {display === '' ? <img src={not_tick} /> : <img src={tick} />}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitems-cross-icon" src={cross} onClick={() => deleteTodo(no)} />
    </div>
  );
};

export default TodoItems;
