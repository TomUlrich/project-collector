import "./GettingStarted.css"

function Events() {

  function handleClick() {
    alert('Clicked')
  }

  function handleChange(event) {
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form was submitted');
  }

  return (
    <>
      <h2>Events</h2>
      <h3>Event Handler</h3>
      <button onClick={handleClick}>Click</button>
      <br />

      <h3>Event Object</h3>
      <p>The following example shows the value of an `input` element in the console window when the user changes the value:</p>
      <input type="text" onChange={handleChange} />
      <br />

      <h3>Preventing default behaviour</h3>
      <p>To stop the default browser behavior from occurring, call the `preventDefault()` method of the event object:</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: <input type="email" name="email" id="email" /></label>
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default Events