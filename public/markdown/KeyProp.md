# KeyProp

-   Use the `map()` method to transform an array of data into an array of elements in JSX.
-   Use the `key` props for list items when rendering a list in JSX.  

## The randomUUID() method

```jsx
// Use the randomUUID() method to generate a unique key for each book
const renderedBooks = books.map((book) => {
  return <Book 
    key={crypto.randomUUID()} 
    title={book.title} 
    author={book.author} 
  />;
});
```
