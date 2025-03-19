import Book from "./Components/Book/Book"
import "./GettingStarted.css"
import christine from "./images/christine.jpg"
import kommSuesserTod from "./images/komm-suesser-tod.jpg"
import stadtDerDiebe from "./images/stadt-der-diebe.jpg"
import watchmen from "./images/watchmen.jpg"

function KeyProp() {
  // 1. Create an array of objects, each object represents a book 
  const books = [
    { cover: kommSuesserTod, title: "Komm süßer Tod", author: "Wolf Haas" },
    { cover: christine, title: "Christine", author: "Stephen King" },
    { cover: stadtDerDiebe, title: "Stadt der Diebe", author: "David Benioff" },
    { cover: watchmen, title: "Watchmen", author: "Alan Moore" }
  ];

  // 2a. Use the map() method to transform an array of data into an array of elements in JSX.
  // 2b. Use the randomUUID() method from the crypto module to generate a unique key for each book when rendering a list in JSX.
  const renderedBooks = books.map((book) => {
    return (<Book key={crypto.randomUUID()} cover={book.cover} title={book.title} author={book.author} />)
  })

  // 3. Render the list of books
  return (
    <div>
      <h2>Favourite Fiction Books</h2>
      <h3>Rendering lists with map()</h3>
      <p>From the <a href="https://www.javascripttutorial.net/react-tutorial/react-jsx-key/">React JSX Key Prop Tutorial</a>: how to render a list of elements properly using the key prop.</p>

      <div className="books-container">
        {renderedBooks}
      </div>
    </div>
  )
}

export default KeyProp