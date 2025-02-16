import Book from "./Components/Book/Book"
import "./FavouriteBooks.css"
import christine from "./images/christine.jpg"
import disziplin from "./images/disziplin.jpg"
import frontendHandbook from "./images/frontend-handbook.jpg"
import eloquentJS from "./images/eloquentJS.jpg"

function FavouriteBooks() {
  return (
    <div className="favourite-books">
      <h2>Project: Favourite Books</h2>
      <p>From the <a href="https://www.javascripttutorial.net/react-tutorial/react-props/">React Props Tutorial</a>: Use React props to pass data down from parent to child components.</p>
      <div className="books-container">
        <Book cover={disziplin} title="Disziplin - Die Macht der Selbstkontrolle" author="Ryan Holiday" />
        <Book cover={christine} title="Christine" author="Stephen King" />
        <Book cover={frontendHandbook} title="Front-end Developer Handbook" author="Cody Lindley" />
        <Book cover={eloquentJS} title="Eloquent JavaScript" author="Marijn Haverbeke" />
      </div>

    </div>
  )
}

export default FavouriteBooks