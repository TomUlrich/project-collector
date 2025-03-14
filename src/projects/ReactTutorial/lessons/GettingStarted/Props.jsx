import "./GettingStarted.css"
import Book from "./Components/Book/Book" // Import the Book component
import leben from "./images/wie-wollen-wir-leben.jpg"
import disziplin from "./images/disziplin.jpg"
import eloquentJS from "./images/eloquentJS.jpg"
import frontendHandbook from "./images/frontend-handbook.jpg"

function Props() {
  return (
    <div className="favourite-books">
      <h2>Favourite Nonfiction Books</h2>
      <h3>Passing data with props</h3>
      <p>From the <a href="https://www.javascripttutorial.net/react-tutorial/react-props/">React Props Tutorial</a>: Use React props to pass data down from parent to child components.</p>
      
      {/* Create Book components that accepts props: */}
      <div className="books-container">
        <Book cover={disziplin} title="Disziplin - Die Macht der Selbstkontrolle" author="Ryan Holiday" />
        <Book cover={frontendHandbook} title="Front-end Developer Handbook" author="Cody Lindley" />
        <Book cover={eloquentJS} title="Eloquent JavaScript" author="Marijn Haverbeke" />
        <Book cover={leben} title="Wie wollen wir leben?" author="Peter Bieri" />
      </div>

    </div>
  )
}

export default Props