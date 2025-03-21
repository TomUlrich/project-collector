import TodoList from './TodoList';

function ConditionalRendering() {
  const todos = [
    { title: 'Learn React', completed: true },
    { title: 'Build an app', completed: false },
    { title: 'Deploy the app', completed: false },
  ];

  return (
    <main>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </main>
  );
}

export default ConditionalRendering