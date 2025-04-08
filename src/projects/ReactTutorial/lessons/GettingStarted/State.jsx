import "./GettingStarted.css"
import { useState } from "react";

function State() {

  const [count, setCount] = useState(0);

  function increment() {
    return setCount(count + 1)
  }

  function decrement() {
    return setCount(count - 1)
  }

  function reset() {
    return setCount(0)
  }

  return (
    <div className="counter">
      <h2>React State</h2>
      <h3>Counter</h3>
      <div className="count">{count}</div>
      <div>
        <button className="decrement" onClick={decrement}>-</button>
        <button className="increment" onClick={increment}>+</button>
      </div>

      <button className="reset" onClick={reset}>Reset</button>
    </div>
  )
}

export default State