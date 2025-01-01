// import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/404';
// Projects:
import ToDoList from './pages/ToDoList/ToDoList'
import Project02 from './pages/Project02'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/todolist' element={<ToDoList />} />
          <Route path='/project02' element={<Project02 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
