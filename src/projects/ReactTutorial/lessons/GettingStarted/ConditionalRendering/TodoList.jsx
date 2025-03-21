const TodoList = ({ todos }) => {
  const renderedTodos = todos.map(({ title, completed }) => {

    // // 3 logical AND / OR operator
    // return (
    //   <div key={crypto.randomUUID()}>
    //     {title}
    //     {completed && ' ✔'}
    //     {completed || ' ✖'}
    //   </div>
    // )

    // // 2.2 ternary operator	#2
    // return (
    //   <div key={crypto.randomUUID()}>
    //     {title}
    //     {completed ? ' ✔' : ' ✖'}
    //   </div>
    // )

    // 2.1 ternary operator	#1
    return (
      completed
        ? <div key={crypto.randomUUID()}>{title} ✔</div>
        : <div key={crypto.randomUUID()}>{title} ✖</div>
    )

    // 1 if statement	
    // if (completed) {
    //   return <div key={crypto.randomUUID()}>{title} ✔</div>
    // }
    // return <div key={crypto.randomUUID()}>{title} ✖</div>
  })

  return <section>{renderedTodos}</section>
}

export default TodoList