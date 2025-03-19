import TodoList from './TodoList';
// import "../GettingStarted.css"

function ConditionalRendering() {
  const todos = [
    { id: 1, title: 'Learn React', completed: true },
    { id: 2, title: 'Build an app', completed: false },
    { id: 3, title: 'Deploy the app', completed: false },
  ];

  return (
    <main>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </main>
  );
}

export default ConditionalRendering