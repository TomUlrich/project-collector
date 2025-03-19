# Props

- Use props to **pass data down** from parent to child components:

<br/>

```jsx
import Book from './Components/Book/Book'; // Import the Book component

function Props() {
  return (
    // Create Book components that accept props:
    <div className="books-container">
      {/* Passing props to the Book component */}
      <Book cover={frontendHandbook} title="Front-end Developer Handbook" author="Cody Lindley" />
      <Book cover={eloquentJS} title="Eloquent JavaScript" author="Marijn Haverbeke" />
    </div>
  );
}

export default Props;
```

<br/>
<br/>

- Using the props passed from the parent component:

<br/>

```jsx
// Book.jsx

function Book({ cover, title, author }) {
  return (
    <>
      {/* Using the props passed from the parent component */}
      <img src={cover} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
    </>
  );
}

export default Book;
```
<br/>