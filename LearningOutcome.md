## Misc

### Placeholder image URL

```
src="https://via.placeholder.com/150"
```


## React Router



## Mapping with generated keys

from [React JSX Key Prop](https://www.javascripttutorial.net/react-tutorial/react-jsx-key/)  
in **FavouriteBooksMapped.jsx**:  

1. Use the `map()` method to transform an array of data into an array of elements in JSX.
2. Use the `randomUUID()` method of the Crypto interface to **generate unique keys** for each book when rendering a list in JSX.

```js
const renderedBooks = books.map((book) => {
  return <Book key={crypto.randomUUID()} cover={book.cover} title={book.title} author={book.author} />;
});
```

