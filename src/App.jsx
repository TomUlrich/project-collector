// #todo: ask chatgtp, what this file is for?

// import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
// Pages:
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/404';
// Projects:
import TodoListApp from './pages/ToDoList/Components/App';
import ReactTutorial from './pages/ReactTutorial-JSTnet/App';
import FavouriteBooks from './pages/ReactTutorial-JSTnet/pages/FavouriteBooks/FavouriteBooks';
import FavouriteBooksMapped from './pages/ReactTutorial-JSTnet/pages/FavouriteBooks/FavouriteBooksMapped';


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          // #todo: is this where it is defined which page is shown when the user navigates to a specific route?
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/todolist' element={<TodoListApp />} />
          <Route path='/reacttutorial' element={<ReactTutorial />} />
          <Route path='/reacttutorial/favouritebooks' element={<FavouriteBooks />} />
          <Route path='/reacttutorial/favouritebooksmapped' element={<FavouriteBooksMapped />} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
