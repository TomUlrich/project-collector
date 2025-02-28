import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
// Pages:
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/404';
// Projects:
import TodoList from './pages/ToDoList/Components/App';
// JST - React Tutorial
import ReactTutorial from './pages/ReactTutorial-JSTnet/App';
import FavouriteBooks from './pages/ReactTutorial-JSTnet/pages/FavouriteBooks/FavouriteBooks';
import FavouriteBooksMapped from './pages/ReactTutorial-JSTnet/pages/FavouriteBooks/FavouriteBooksMapped';
// ## import ConditionalRendering from '';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        {/* Connect defined routes with desired components */}
        {/* Routes are defined in projectData.js */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
          <Route path='//todo-list' element={<TodoList />} />
          <Route path='/react-tutorial' element={<ReactTutorial />} />
          {/* pathes from projectData.js: */}
          <Route path='/react-tutorial/props/' element={<FavouriteBooks />} />
          <Route path='/react-tutorial/key-prop/' element={<FavouriteBooksMapped />} />
          {/* <Route path='/react-tutorial/conditional-rendering' element={<ConditionalRendering />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
