import './App.css';
import Card from "../../components/Card/Card";
import nonfictionBooks from "./images/nonfiction-books.jpg";
import fictionBooks from "./images/fiction-books.jpg";
import JSTlogo from "./images/JSTnet-Logo.PNG";

const App = () => {
  return (
    <div className="app">
      <h1>
        Learning React with <img className='tutor-logo' src={JSTlogo} alt="JST Logo" />
      </h1>
      {/* Setting route for <FavouriteBooks /> */}
      <div className="card-container">
        <Card title="Favourite nonfiction books" description="A collection of nonfiction books I loved to read" route="/reacttutorial/favouritebooks" image={nonfictionBooks} />
        <Card title="Favourite fiction books - Rendering lists with map()" description="A collection of novels I loved to read" route="/reacttutorial/favouritebooksmapped" image={fictionBooks} />
      </div>
    </div>
  );
}

export default App;