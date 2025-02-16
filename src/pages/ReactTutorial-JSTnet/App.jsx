import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import FavouriteBooks from "./pages/FavouriteBooks/FavouriteBooks";
import Card from "../../components/Card/Card";
import image from "./images/favourite-books-snapshot.PNG";

const App = () => {
  return (
    <div>
      <h1>The JavaScriptTUTORIAL.net React Tutorial</h1>
      {/* <FavouriteBooks /> */}
      <Card title="Project: Favourite Books" description="A collection of books I loved to read" route="/reacttutorial/favouritebooks" image={image} />
    </div>
  );
}

export default App;